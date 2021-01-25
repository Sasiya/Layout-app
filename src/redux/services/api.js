import axios from 'axios';
import {BASE_API_URL} from './config';
import AsyncStorage from '@react-native-community/async-storage';
import { View, StyleSheet, ToastAndroid, Button, Platform } from "react-native";
// export const api = axios.create({
//   baseURL: BASE_API_URL,
//   timeout: 6000,
//   headers: {
//     'X-Requested-With': 'XMLHttpRequest',
//   },
// });

export const api = axios.create({
  baseURL: BASE_API_URL,

});



export default api;

// 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVhNDIxZGFjMDYwZjc3ZGYxNWViZTM2ODYzOGIxMWM4YjBiOTZlNDI2NzMxZDQxMGUyMzRhM2U1OGYzYzEyMjBjNjJkOGM2N2RlNjYzZmVkIn0.eyJhdWQiOiIxIiwianRpIjoiNWE0MjFkYWMwNjBmNzdkZjE1ZWJlMzY4NjM4YjExYzhiMGI5NmU0MjY3MzFkNDEwZTIzNGEzZTU4ZjNjMTIyMGM2MmQ4YzY3ZGU2NjNmZWQiLCJpYXQiOjE1NzU4ODkyMjksIm5iZiI6MTU3NTg4OTIyOSwiZXhwIjoxNjA3NTExNjI5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.02JmtnHcZh80A4DHRjWIP3sKIW02HcQBhZ37PdWdIqVmvuyZfkPZKToRQOLQpetXnB_xgos4rx3kZ30zzjlrqOkedVrnPCQ73OHSaIBUZMPJfPEhucOgP9OIYZT8x-Yqf36-r2UM2gYBmm2QLiLPZUWDMC8Lr9LoTo4skfgEL3eThxaFfP7kvk5Bkdwbpfh0ibrhAqExAaxAPDvgNW8YpG2crtx1U5ioFZ6yy_9BVbs7o12Z3mSCVM__xCehnxSX-WxZOau3lohIZz0YPJ8jwXYent1n8pylxFPXy1-Q9aJ32IcmXkRjlJqn5NqN_BfqruL2q6oXC7qBU20-tQ__lmAVldjIyiKz_MRxkUmysQLz6_Bw3IcyHLWvGtVbGKcw1vMxBuQ7Poirfu-GVTpOXnalkbWl9Q9LHC7RPhEjZd_LkGyaMz3jOhlFtixe8Orh0xULw5VFiMw-zkSgk_g2sVrWT-nHZ0mN0jqiqTKtaWMC-1TJ9pXNLHsKxufEbMy0oSWKY7qm7bWi-pi2HCdaT0oUFYa-hK7xYbsGAEtN3GGQBMl2uejIGL3Hj7wsBsHyFQzMvzAWU5Oydlg8NMGksA1OKOe7YCMB7BbKcBGCN3LnchEomozbA5mz1vZBgYIYHjBDrge4fMKvvZK_Erxble7WbtuiCywOmYseMlqi9V0',
