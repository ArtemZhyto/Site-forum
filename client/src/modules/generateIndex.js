const generateIndex = async () => {
  let index = ""

  index = Math.floor(Math.random() * (999999999999999 - 100000000000000) + 100000000000000)

  return index
}

export default generateIndex