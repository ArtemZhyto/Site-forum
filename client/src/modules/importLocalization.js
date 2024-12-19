const importLocal = async (importLang, setData) => {  
  try {
    const LOCALIZATION = await import(`../config/locales/${importLang}.json`)
    setData(LOCALIZATION)
  } catch (err) {
    console.log('Localization import error. Default localization is set')
    const LOCALIZATION = await import(`../config/locales/en.json`)
    setData(LOCALIZATION)
  }
}

export default importLocal