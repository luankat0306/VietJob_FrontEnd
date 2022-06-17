import { selectUserInfo } from '@/redux/authSlice';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useSelector } from 'react-redux';

const firebaseConfig = {
  apiKey: 'AIzaSyCVjn5fWMGPdUKEGnY4JIUVg0CoCnIorBI',
  authDomain: 'vietjob-3a5f6.firebaseapp.com',
  projectId: 'vietjob-3a5f6',
  storageBucket: 'vietjob-3a5f6.appspot.com',
  messagingSenderId: '559388826476',
  appId: '1:559388826476:web:6f2abe63883690c7fdb149',
  measurementId: 'G-CCCV0RWFD1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const storageRef = ref(storage);

const useUploadFile = () => {
  const info = useSelector(selectUserInfo);

  const uploadFile = async (file) => {
    const newRef = ref(storageRef, info?.email + '/' + new Date().getTime() + '/' + file.name);
    const uploadTask = await uploadBytes(newRef, file);
    const url = await getDownloadURL(uploadTask.ref);
    return url;
  };
  return {
    uploadFile
  };
};

export default useUploadFile;
