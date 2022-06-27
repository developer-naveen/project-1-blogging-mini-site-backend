export default class Validations {
    /*
    **email validation
    */
    public static IsValidEmail(str: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)
    }
    /*
    **ValidString
    */
   public static IsValidString(str: string): boolean{
    return /^[ A-Za-z0-9]/.test(str)
   }
    /*
    **phonenumber validation
    */
    public static IsValidPhoneNumber(num: string): boolean {
        return /^\d{10}$/.test(num);
    }
    /*
    **validNumber
    */
   public static IsValidNumber(num: string): boolean{
       return /^[0-9]+$/.test(num)
   }
   /*
   **validAlphaNumeric
   */
  public static IsValidAlphaNumeric(num: string): boolean
  {
      return /^[a-z0-9]+$/i.test(num)
  }
  /*
  **AlphaNumericwithspecialcharacters
  */
 public static IsValidAlphaNumericWithSpecialChars(str: string): boolean{
     return /^[ A-Za-z0-9_@./#&+-]*$/.test(str)
 }
}