import React from 'react'

interface Props {
  size?: string
  color?: string

}

const Controller = ({size = '10rem',color='#fff'}:Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      x="0" 
      y="0" 
      viewBox="0 16 100 69"
      fill={color}
    >
      <path d="M37.723 20.764a4.22 4.22 0 01-1.113-.442l-2.936-1.689s-5.216-.802-13.901 3.802a2.798 2.798 0 00-1.26 1.357c-.609 1.406-1.132 2.451-1.132 2.451l.023.076c5.397-2.964 10.494-3.969 13.09-4.305 1.089-.141 2.337.27 3.069 1.089l1.723 1.928 2.437-4.267zM61.353 20.863a4.085 4.085 0 01-.399.021H38.713c-.131 0-.261-.008-.39-.02l-2.637 4.616 4.456 4.988a3.562 3.562 0 002.657 1.189H56.868a3.564 3.564 0 002.657-1.189l4.464-4.996-2.636-4.609zm-11.52 9.481a4.1 4.1 0 110-8.2 4.1 4.1 0 010 8.2zM82.286 26.244s-.523-1.046-1.132-2.451a2.798 2.798 0 00-1.26-1.357c-8.685-4.605-13.901-3.802-13.901-3.802l-2.936 1.689a4.2 4.2 0 01-1.089.436l2.433 4.253 1.705-1.908c.731-.819 1.98-1.23 3.069-1.089 2.61.338 7.748 1.351 13.177 4.352l-.066-.123z"></path>
      <circle cx="26.545" cy="37.687" r="4.824"></circle>
      <circle cx="61.654" cy="51.705" r="4.824"></circle>
      <path d="M68.519 36.073a2.364 2.364 0 11-3.124 3.548 2.364 2.364 0 013.124-3.548M81.13 36.073a2.364 2.364 0 11-3.124 3.548 2.364 2.364 0 013.124-3.548M74.913 30.017a2.364 2.364 0 11-3.124 3.548 2.364 2.364 0 013.124-3.548M74.913 42.29a2.364 2.364 0 11-3.124 3.548 2.364 2.364 0 013.124-3.548"></path>
      <path d="M93.837 55.695c-.563-2.653-7.236-24.28-10.13-27.737-5.915-3.618-11.707-4.775-14.533-5.14a3.33 3.33 0 00-2.908 1.089l-6.58 7.364a3.562 3.562 0 01-2.657 1.189h-14.39a3.564 3.564 0 01-2.657-1.189l-6.58-7.364a3.33 3.33 0 00-2.908-1.089c-2.827.366-8.619 1.522-14.533 5.14-2.894 3.457-9.567 25.084-10.13 27.737s-6.19 22.27 7.718 24.923c8.281-5.708 11.657-12.22 17.928-15.275 3.845-.7 8.334-.482 18.357-.482h.161c10.023 0 14.352-.217 18.196.482 6.271 3.055 9.648 9.567 17.928 15.275 13.908-2.653 8.28-22.269 7.718-24.923zM26.545 44.52a6.834 6.834 0 110-13.669 6.834 6.834 0 010 13.669zm18.036 9.5a.765.765 0 01-.765.765h-3.217a.386.386 0 00-.386.386v3.217a.765.765 0 01-.765.765h-2.919a.765.765 0 01-.765-.765V55.17a.386.386 0 00-.386-.386h-3.217a.765.765 0 01-.765-.765V51.1c0-.422.342-.765.765-.765h3.217a.386.386 0 00.386-.386v-3.217c0-.422.342-.765.765-.765h2.919c.422 0 .765.342.765.765v3.217c0 .213.173.386.386.386h3.217c.422 0 .765.342.765.765v2.92zm-1.235-14.163a2.01 2.01 0 110-4.02 2.01 2.01 0 010 4.02zm30.005-11.175a3.11 3.11 0 110 6.218 3.11 3.11 0 010-6.218zm-16.738 7.156a2.01 2.01 0 110 4.02 2.01 2.01 0 010-4.02zm5.041 22.7a6.834 6.834 0 110-13.669 6.834 6.834 0 010 13.669zm5.304-17.582a3.11 3.11 0 110-6.218 3.11 3.11 0 010 6.218zm6.393 6.218a3.11 3.11 0 110-6.218 3.11 3.11 0 010 6.218zm6.218-6.218a3.11 3.11 0 110-6.218 3.11 3.11 0 010 6.218z"></path>
    </svg>
  )
}

export default Controller