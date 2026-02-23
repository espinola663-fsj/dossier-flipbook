/**
 * URLs CDN de las páginas del dossier
 * Estas URLs apuntan a las imágenes almacenadas en S3
 */

export const pageUrls: Record<number, string> = {
  1: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/IGaVRMwMpGcCvnht.png',
  2: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/lWOkNPhLktLEIUDl.png',
  3: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/iBihnzLGVQEOMRfv.png',
  4: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/DiIbHFUuUNZRZvNi.png',
  5: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/ZNnOaEqnfElauJWt.png',
  6: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/nGCxZfTZDveeSpWm.png',
  7: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/ONZANiajreRENgHV.png',
  8: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/FRIAfeYDisjPcZuY.png',
  9: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/AilvTJdcvHDFNomo.png',
  10: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/MMyCjvsozPqJUBCM.png',
  11: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/aFCMLNVsUirOHAMj.png',
  12: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/ykpLfaArAkbkcucI.png',
  13: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/nVmeAaynzUBYSZZP.png',
  14: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/sOguXPpHVETjGGxD.png',
  15: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/LiKYegyaMZObLzPS.png',
  16: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/BuFTAPUqIrUcnNIU.png',
  17: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/zbhumYuabxFYfftq.png',
  18: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/UZWfnFfMtYKYQrQv.png',
  19: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/ixDbrxqWywSwugyv.png',
  20: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/WVKukROoZjdVBKXg.png',
  21: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/gIXVSEMOoRWtmUaB.png',
  22: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/ZtOauorbeVoIKpVj.png',
};

/**
 * Obtener la URL de una página
 * @param pageNum Número de página (1-22)
 * @returns URL de la imagen o null si no existe
 */
export function getPageUrl(pageNum: number): string | null {
  return pageUrls[pageNum] || null;
}
