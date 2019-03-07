function handleError(error) {
  if (error && error.data && error.data.error) {
    return error.data.error;
  } else {
    return "Sorry! Something went wrong. Please try again";
  }
}

export const errorUtils = { handleError };
