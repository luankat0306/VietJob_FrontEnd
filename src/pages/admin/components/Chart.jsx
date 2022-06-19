import { primary } from '@/theme/themeColors';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Biểu đồ số việc làm theo ngày'
    }
  }
};

export function Chart({ data = [] }) {
  const newdata = {
    labels: data?.map((item) => moment(item._id).format('DD/MM/YYYY')),
    datasets: [
      {
        label: 'Tổng số việc làm',
        data: data?.map((item) => item?.count),
        backgroundColor: primary.main
      }
    ]
  };
  return <Bar options={options} data={newdata} />;
}
