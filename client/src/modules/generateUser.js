const generateUser = async () => {
  let user = ""

  user = Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)

  return user
}

export default generateUser