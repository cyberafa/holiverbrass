function IsMobile(): boolean {
  if (screen.width > 768) {
    return false;
  } else return true;
}

export default IsMobile;
