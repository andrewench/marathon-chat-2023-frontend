type QueryOptions = {
  key: string
  value: string
}

export const createQueryString = (
  pathname: string,
  options: QueryOptions[],
) => {
  const params = new URLSearchParams()

  options.forEach(({ key, value }) => params.set(key, value))

  const queries = params.toString()

  return {
    path: pathname + `?${queries}`,
    queries,
  }
}
