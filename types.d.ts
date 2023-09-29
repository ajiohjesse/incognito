interface ApiResponse<T = any, E = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: E;
}
