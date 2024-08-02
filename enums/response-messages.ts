export enum ResponseMessages {
  DATA_FETCH_ERROR = 'Oops! Something went wrong',
  CATEGORY_FETCH_ERROR = 'Oops! Something went wrong',
  QUESTION_LIST_FETCH_ERROR = 'Oops! Something went wrong',
  QUESTION_FETCH_ERROR = 'Oops! Something went wrong',
  REGISTRATION_FAILED = 'Registration Failed',
  REQUEST_ERROR = 'Oops! Something went wrong',
  REGISTRATION_SUCCESS = 'Account created successfully',
  LOGIN_SUCCESS = 'Login successful',
  CODE_SENT = 'A code has been set to your email',
  LOGIN_FAILED = 'Login failed',
  FORGOT_PASSWORD_FAILED = 'Forgot Password Code Sent Failed',
  PASSWORD_RESET_FAILED = 'Password Reset Failed',
  PASSWORD_RESET_SUCCESS = 'Password Reset Successful',
  EXAM_FAILD = 'Get exam failed',

  MY_MARKS_FETCH_ERROR = 'Oops! Something went wrong',
  MY_MARKS_FETCH_SUCCESS = 'Marks fetched successfully',


  SUBSCRIPTION_SUCCESSFUL = 'Subscribed successfully',
  SUBSCRIPTION_FAIL = 'Subscription failed! Please contact customer care with this order id:',

  INVALID_PASSWORD = 'Password must contain at least one uppercase, one lowecase and one numeric character and must be 8 or more characters',
}

export enum RequestStatus {
  SUCCESS = 'Success',
  ERROR = 'Error',
}
