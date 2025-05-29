import axios from 'axios';

export const apicall = async () => {
  const result = await axios.get('http://localhost:5000/api/matches', {
    params: {
      dateFrom: '2025-06-01',
      dateTo: '2025-06-10'
    }
  });

  console.log(result.data);
  return result;
}
