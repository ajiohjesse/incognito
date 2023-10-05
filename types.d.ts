type ApiResponse<T = any, E = any> =
  | {
      success: true;
      message: string;
      data: T;
      error: null;
    }
  | {
      success: false;
      message: string;
      data: null;
      error: E;
    };
