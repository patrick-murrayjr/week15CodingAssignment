function Footer() {
   let currentYear = new Date().getFullYear();

   return (
      <footer
         className='bg-secondary text-center fixed-bottom mt-2'
         data-bs-theme='light'>
         <div className='text-body-tertiary text-center fs-6 p-2'>
            &copy; {currentYear} Patrick Murray
         </div>
      </footer>
   );
}

export default Footer;
