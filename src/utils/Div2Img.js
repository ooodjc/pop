import html2canvas from 'html2canvas'

export async function convertDivToImage(divId, fileName) {
  const div = document.getElementById(divId)
  if (!div) {
    throw new Error(`There is no element with id "${divId}" in the document.`)
  }

  const canvas = await html2canvas(div, { scale: 4 })
  const dataUrl = canvas.toDataURL('image/png')

  return new Promise(resolve => {
    const link = document.createElement('a')
    link.download = fileName
    link.href = dataUrl

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    resolve()
  })
}
