export const truncateAddress = (address) => {
    if (!address) {
      return;
    }
  
    if (!address.startsWith("0x")) {
      return address;
    }
  
    const strLength = 11; // 4 digits for first part, 3 digits for ellipsis, 4 digits for the end
  
    const separator = "...";
  
    const charsToShow = strLength - separator.length;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
  
    return (
      "0x" +
      address.substr(2, frontChars) +
      separator +
      address.substr(address.length - backChars)
    );
  };
  