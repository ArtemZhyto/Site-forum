const generateID = async () => {
  let ID = ""

  ID = Math.floor(Math.random() * (999999999999999 - 100000000000000) + 100000000000000)

  return ID
}

export default generateID