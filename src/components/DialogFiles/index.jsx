import { LoadingButton } from '@mui/lab';
import {
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {
  FullMetadata,
  getDownloadURL,
  getMetadata,
  list,
  listAll,
  ListResult,
  ref,
  uploadBytes
} from 'firebase/storage';
import { Grid8, HambergerMenu } from 'iconsax-react';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { FC, useRef, useState } from 'react';
import FileUpload from 'react-material-file-upload';
import { useAppSelector } from 'src/redux/hooks';
import { selectAuth } from 'src/redux/slice/auth';
import { storage } from '../../../firebase/config';
import IconButtonBase from '../icon-button-base';
import SearchBar from '../search-bar';

const path = 'images/f5s/';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogMediaUpload = ({
  open,
  onClose,
  onSubmit,
  children,
  multiple = false,
  init,
  ...rest
}) => {
  const { email } = useAppSelector(selectAuth);
  const storageRef = ref(storage, path);
  const [listImage, setListImage] = useState([]);
  const [listChecked, setListChecked] = useState(init ? [init] : []);
  const { enqueueSnackbar } = useSnackbar();
  const [files, setFiles] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [search, setSearch] = useState('');
  // const [progress, setProgress] = useState(0);
  const [view, setView] = useState('list');
  const [pagination, setPagination] = useState({
    page: 1,
    totalCount: 1,
    totalPage: 1,
    limit: 10
  });
  const [paginateStorage, setPaginateStorage] = useState();
  const listImageRef = useRef();
  const handleSubmit = async () => {
    if (isUpload) {
      setIsSubmitting(true);
      const result = await Promise.all(
        files.map(async (item) => {
          const storageRef = ref(storage, `${path}${item.name}`);
          const resUpload = await uploadBytes(storageRef, item, {
            customMetadata: {
              createdBy: email ?? ''
            }
          });
          // console.log(resUpload);
          return resUpload;
        })
      );
      // console.log(result);
      if (result.length > 0) {
        setFiles([]);
        enqueueSnackbar('Upload thành công', { variant: 'success' });
        setIsUpload(false);
      } else {
        enqueueSnackbar('Đã xảy ra lỗi upload', { variant: 'error' });
      }
      setIsSubmitting(false);
    } else {
      // console.log(listImage, listChecked);
      onSubmit && onSubmit(listChecked);
    }
    // console.log(files);
  };
  const handleLoadMore = async () => {
    setListImage(
      listImageRef.current
        ?.filter((item, index) => item.name.toLowerCase().includes(search.toLowerCase()))
        .filter((item, index) => index < pagination.limit * (pagination.page + 1)) ?? []
    );
    setPagination((prev) => ({
      ...prev,
      page: prev.page + 1
    }));

    // if (paginateStorage && paginateStorage.nextPageToken) {
    //   try {
    //     setIsFetching(true);
    //     const lastPage = await list(storageRef, {
    //       maxResults: 10,
    //       pageToken: paginateStorage.nextPageToken,
    //     });
    //     const listImg = await Promise.all(
    //       lastPage.items.map(async itemRef => {
    //         const url = await getDownloadURL(itemRef);
    //         const meta = await getMetadata(ref(storage, itemRef.fullPath));
    //         return {url, name: itemRef.name, checked: false, metadata: meta};
    //       })
    //     );
    //     setListImage(prev => [...prev, ...listImg]);
    //     setPaginateStorage(lastPage);
    //     setIsFetching(false);
    //   } catch (error) {
    //     console.log('lỗi loadmore', error);
    //   }
    // }
  };
  const handleSearch = (value) => {
    setSearch(value);
    const newList =
      listImageRef.current?.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      ) ?? [];
    setListImage(newList.filter((item, index) => index < pagination.limit * pagination.page) ?? []);
    setPagination((prev) => ({
      ...prev,
      totalCount: newList.length,
      totalPage: Math.ceil(newList.length / prev.limit)
    }));
  };
  React.useEffect(() => {
    init && setListChecked([init]);
  }, [init]);
  React.useEffect(() => {
    const getAllImage = async () => {
      try {
        setIsLoading(true);
        const results = await listAll(storageRef);

        const listImg = await Promise.all(
          results.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            const meta = await getMetadata(ref(storage, itemRef.fullPath));
            return { url, name: itemRef.name, checked: false, metadata: meta };
          })
        );
        // setPaginateStorage(firstPage);
        listImageRef.current = listImg;
        setListImage(listImg.filter((item, index) => index < pagination.limit * pagination.page));
        setPagination((prev) => ({
          ...prev,
          totalCount: listImg.length,
          totalPage: Math.ceil(listImg.length / prev.limit)
        }));
      } catch (error) {
        console.log('Lỗi get list image', error);
      } finally {
        setIsLoading(false);
      }
    };
    // const getAllImage = async () => {
    //   try {
    //     setIsLoading(true);
    //     const firstPage = await list(storageRef, {maxResults: 10});

    //     const listImg = await Promise.all(
    //       firstPage.items.map(async itemRef => {
    //         const url = await getDownloadURL(itemRef);
    //         const meta = await getMetadata(ref(storage, itemRef.fullPath));
    //         return {url, name: itemRef.name, checked: false, metadata: meta};
    //       })
    //     );
    //     setPaginateStorage(firstPage);
    //     setListImage(listImg);
    //   } catch (error) {
    //     console.log('Lỗi get list image', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    !isUpload && getAllImage();
  }, [isUpload]);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      fullWidth
      maxWidth="md"
      {...rest}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <DialogTitle
        sx={{
          fontSize: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        Upload
        <Button onClick={() => setIsUpload((prev) => !prev)}>
          {isUpload ? 'Chọn hình ảnh' : 'Upload hình ảnh'}
        </Button>
      </DialogTitle>
      <Divider />
      <DialogContent>
        {isLoading ? (
          <Stack direction="row" justifyContent="center">
            <CircularProgress />
          </Stack>
        ) : isUpload ? (
          <>
            <FileUpload value={files} onChange={setFiles} multiple />
            {/* <div className="py-4">
              <Typography
                className="flex justify-center"
                variant="caption"
              >{`${progress}%`}</Typography>
              <LinearProgress variant="determinate" value={progress} />
            </div> */}
          </>
        ) : (
          <>
            <div className="flex flex-1 justify-between pt-0 p-4">
              <div className="flex items-center">
                <Typography variant="body2">Xem:&nbsp;</Typography>
                <IconButtonBase
                  iconName={Grid8}
                  tooltip="Xem dạng lưới"
                  size="large"
                  onClick={() => setView('grid')}
                />
                <IconButtonBase
                  iconName={HambergerMenu}
                  size="large"
                  onClick={() => setView('list')}
                  tooltip="Xem dạng danh sách"
                />
              </div>
              <SearchBar
                placeholder="Nhập tên hình ảnh..."
                // onSubmit={setSearch}
                onSubmit={handleSearch}
                width={400}
              />
            </div>
            <div className="flex flex-1 justify-center pt-0 p-4">
              {listImage.length === 0 ? 'Không có hình ảnh' : null}
            </div>
            {view === 'grid' ? (
              <Stack direction="row" flexWrap="wrap">
                {listImage
                  // .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                  .map((item, index) => (
                    <label
                      htmlFor={`checkbox-${index}`}
                      key={index}
                      style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: '#eee',
                        marginRight: 16,
                        marginBottom: 16,
                        width: 150,
                        height: 150,
                        padding: 4,
                        cursor: 'pointer'
                      }}
                    >
                      <img
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: 'contain',
                          marginLeft: 'auto',
                          marginRight: 'auto'
                        }}
                        src={item.url}
                        alt={item.name}
                      />
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {item.name}
                      </span>
                      <Checkbox
                        id={`checkbox-${index}`}
                        sx={{ position: 'absolute', top: -10, left: -10 }}
                        checked={listChecked.indexOf(item.url) > -1}
                        onChange={(e, checked) => {
                          let newList = [...listChecked];
                          if (multiple) {
                            if (checked) {
                              newList.push(item.url);
                            } else {
                              newList = newList.filter((url) => url !== item.url);
                            }
                            setListChecked(newList);
                          } else {
                            if (checked) {
                              setListChecked([item.url]);
                            } else {
                              setListChecked([]);
                            }
                          }
                        }}
                      />
                    </label>
                  ))}
              </Stack>
            ) : (
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {listImage
                  // .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                  .map((item, index) => (
                    <label
                      htmlFor={`checkbox-${index}`}
                      key={index}
                      style={{
                        cursor: 'pointer'
                      }}
                    >
                      <ListItem
                        secondaryAction={
                          <Checkbox
                            id={`checkbox-${index}`}
                            sx={{ position: 'absolute', top: -10, left: -10 }}
                            checked={listChecked.indexOf(item.url) > -1}
                            onChange={(e, checked) => {
                              let newList = [...listChecked];
                              if (multiple) {
                                if (checked) {
                                  newList.push(item.url);
                                } else {
                                  newList = newList.filter((url) => url !== item.url);
                                }
                                setListChecked(newList);
                              } else {
                                if (checked) {
                                  setListChecked([item.url]);
                                } else {
                                  setListChecked([]);
                                }
                              }
                            }}
                          />
                        }
                      >
                        <ListItemAvatar>
                          <img
                            style={{
                              width: 100,
                              height: 100,
                              objectFit: 'contain',
                              marginLeft: 'auto',
                              marginRight: 'auto'
                            }}
                            src={item.url}
                            alt={item.name}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            <React.Fragment>
                              <p>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  Ngày tạo:&nbsp;
                                </Typography>
                                {moment(item.metadata.timeCreated).format('HH:mm - DD/MM/YYYY')}
                              </p>
                              <p>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  Người tạo:&nbsp;
                                </Typography>
                                {item.metadata.customMetadata?.createdBy}
                              </p>
                              <p>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  Kích thước:&nbsp;
                                </Typography>
                                {item.metadata.size > 1048576
                                  ? `${(item.metadata.size / 1024 / 1024).toFixed(3)}MB`
                                  : `${(item.metadata.size / 1024).toFixed(3)}KB`}
                              </p>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </label>
                  ))}
              </List>
            )}
            <div className="flex flex-1 justify-center">
              {pagination.page < pagination.totalPage ? (
                <Button variant="text" onClick={handleLoadMore}>
                  Xem thêm...
                </Button>
              ) : null}
            </div>
            {/* <div className="flex flex-1 justify-center">
              {paginateStorage?.nextPageToken ? (
                isFetching ? (
                  <CircularProgress size={20} />
                ) : (
                  <Button variant="text" onClick={handleLoadMore}>
                    Xem thêm...
                  </Button>
                )
              ) : null}
            </div> */}
          </>
        )}
      </DialogContent>
      <Divider />
      <DialogActions>
        <Stack flex={1} direction="row" justifyContent="flex-end">
          <LoadingButton
            // disabled={isSubmitting}
            variant="outlined"
            onClick={onClose}
            sx={{ minWidth: 150 }}
          >
            Hủy
          </LoadingButton>
          <div style={{ width: 24 }} />
          <LoadingButton
            loading={isSubmitting}
            variant="contained"
            sx={{ minWidth: 150 }}
            onClick={handleSubmit}
          >
            {isUpload ? 'Bắt đầu upload' : 'Hoàn thành'}
          </LoadingButton>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default DialogMediaUpload;
