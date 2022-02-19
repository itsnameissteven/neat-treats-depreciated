import React from "react";

import { IIcon } from "../types";

const Meteor = ({ size = 48, color = "black", ...props }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_101_146" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.0762 7.37139C21.5338 6.8289 21.5338 5.94935 22.0762 5.40687C22.6187 4.86438 23.4983 4.86438 24.0408 5.40687L26.0053 7.37139C26.5478 7.91387 26.5478 8.79342 26.0053 9.33591C25.4628 9.87839 24.5832 9.87839 24.0408 9.33591L22.0762 7.37139ZM29.8708 29.8709C33.1358 26.6059 33.1358 21.3123 29.8708 18.0474C26.6058 14.7824 21.3123 14.7824 18.0473 18.0474C14.7824 21.3123 14.7824 26.6059 18.0473 29.8709C21.3123 33.1358 26.6058 33.1358 29.8708 29.8709ZM31.8171 31.8172C36.157 27.4773 36.157 20.4409 31.8171 16.101C27.4772 11.7611 20.4409 11.7611 16.101 16.101C11.7611 20.4409 11.7611 27.4773 16.101 31.8172C20.4409 36.1571 27.4772 36.1571 31.8171 31.8172ZM38.664 21.9946C38.1215 22.5371 38.1215 23.4166 38.664 23.9591L40.6285 25.9236C41.171 26.4661 42.0506 26.4661 42.593 25.9236C43.1355 25.3811 43.1355 24.5016 42.593 23.9591L40.6285 21.9946C40.086 21.4521 39.2065 21.4521 38.664 21.9946ZM5.40687 24.0409C4.86438 23.4984 4.86438 22.6189 5.40687 22.0764C5.94935 21.5339 6.8289 21.5339 7.37139 22.0764L9.33591 24.0409C9.87839 24.5834 9.87839 25.4629 9.33591 26.0054C8.79342 26.5479 7.91387 26.5479 7.37139 26.0054L5.40687 24.0409ZM33.3579 11.1319C32.8154 11.6744 32.8154 12.5539 33.3579 13.0964L34.3401 14.0787C34.8826 14.6212 35.7621 14.6212 36.3046 14.0787C36.8471 13.5362 36.8471 12.6566 36.3046 12.1142L35.3224 11.1319C34.7799 10.5894 33.9003 10.5894 33.3579 11.1319ZM11.1318 35.3224C10.5893 34.7799 10.5893 33.9004 11.1318 33.3579C11.6743 32.8154 12.5538 32.8154 13.0963 33.3579L14.0786 34.3402C14.621 34.8827 14.621 35.7622 14.0786 36.3047C13.5361 36.8472 12.6565 36.8472 12.114 36.3047L11.1318 35.3224ZM36.3046 34.3402L35.3224 33.3579C34.7799 32.8154 33.9003 32.8154 33.3579 33.3579C32.8154 33.9004 32.8154 34.7799 33.3579 35.3224L34.3401 36.3047C34.8826 36.8472 35.7621 36.8472 36.3046 36.3047C36.8471 35.7622 36.8471 34.8827 36.3046 34.3402ZM11.1318 13.0964C10.5893 12.5539 10.5893 11.6744 11.1318 11.1319C11.6743 10.5894 12.5538 10.5894 13.0963 11.1319L14.0786 12.1142C14.621 12.6566 14.621 13.5362 14.0786 14.0787C13.5361 14.6212 12.6565 14.6212 12.114 14.0787L11.1318 13.0964ZM21.9945 38.6641C21.452 39.2066 21.452 40.0861 21.9945 40.6286L23.959 42.5931C24.5015 43.1356 25.3811 43.1356 25.9236 42.5931C26.466 42.0506 26.466 41.1711 25.9236 40.6286L23.959 38.6641C23.4165 38.1216 22.537 38.1216 21.9945 38.6641Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0762 7.37139C21.5338 6.8289 21.5338 5.94935 22.0762 5.40687C22.6187 4.86438 23.4983 4.86438 24.0408 5.40687L26.0053 7.37139C26.5478 7.91387 26.5478 8.79342 26.0053 9.33591C25.4628 9.87839 24.5832 9.87839 24.0408 9.33591L22.0762 7.37139ZM29.8708 29.8709C33.1358 26.6059 33.1358 21.3123 29.8708 18.0474C26.6058 14.7824 21.3123 14.7824 18.0473 18.0474C14.7824 21.3123 14.7824 26.6059 18.0473 29.8709C21.3123 33.1358 26.6058 33.1358 29.8708 29.8709ZM31.8171 31.8172C36.157 27.4773 36.157 20.4409 31.8171 16.101C27.4772 11.7611 20.4409 11.7611 16.101 16.101C11.7611 20.4409 11.7611 27.4773 16.101 31.8172C20.4409 36.1571 27.4772 36.1571 31.8171 31.8172ZM38.664 21.9946C38.1215 22.5371 38.1215 23.4166 38.664 23.9591L40.6285 25.9236C41.171 26.4661 42.0506 26.4661 42.593 25.9236C43.1355 25.3811 43.1355 24.5016 42.593 23.9591L40.6285 21.9946C40.086 21.4521 39.2065 21.4521 38.664 21.9946ZM5.40687 24.0409C4.86438 23.4984 4.86438 22.6189 5.40687 22.0764C5.94935 21.5339 6.8289 21.5339 7.37139 22.0764L9.33591 24.0409C9.87839 24.5834 9.87839 25.4629 9.33591 26.0054C8.79342 26.5479 7.91387 26.5479 7.37139 26.0054L5.40687 24.0409ZM33.3579 11.1319C32.8154 11.6744 32.8154 12.5539 33.3579 13.0964L34.3401 14.0787C34.8826 14.6212 35.7621 14.6212 36.3046 14.0787C36.8471 13.5362 36.8471 12.6566 36.3046 12.1142L35.3224 11.1319C34.7799 10.5894 33.9003 10.5894 33.3579 11.1319ZM11.1318 35.3224C10.5893 34.7799 10.5893 33.9004 11.1318 33.3579C11.6743 32.8154 12.5538 32.8154 13.0963 33.3579L14.0786 34.3402C14.621 34.8827 14.621 35.7622 14.0786 36.3047C13.5361 36.8472 12.6565 36.8472 12.114 36.3047L11.1318 35.3224ZM36.3046 34.3402L35.3224 33.3579C34.7799 32.8154 33.9003 32.8154 33.3579 33.3579C32.8154 33.9004 32.8154 34.7799 33.3579 35.3224L34.3401 36.3047C34.8826 36.8472 35.7621 36.8472 36.3046 36.3047C36.8471 35.7622 36.8471 34.8827 36.3046 34.3402ZM11.1318 13.0964C10.5893 12.5539 10.5893 11.6744 11.1318 11.1319C11.6743 10.5894 12.5538 10.5894 13.0963 11.1319L14.0786 12.1142C14.621 12.6566 14.621 13.5362 14.0786 14.0787C13.5361 14.6212 12.6565 14.6212 12.114 14.0787L11.1318 13.0964ZM21.9945 38.6641C21.452 39.2066 21.452 40.0861 21.9945 40.6286L23.959 42.5931C24.5015 43.1356 25.3811 43.1356 25.9236 42.5931C26.466 42.0506 26.466 41.1711 25.9236 40.6286L23.959 38.6641C23.4165 38.1216 22.537 38.1216 21.9945 38.6641Z"
        fill={color}
      />
      <path
        d="M22.0762 5.40687L21.1031 4.4337L21.1031 4.4337L22.0762 5.40687ZM22.0762 7.37139L21.1031 8.34455V8.34455L22.0762 7.37139ZM24.0408 5.40687L25.0139 4.4337L25.0139 4.4337L24.0408 5.40687ZM26.0053 7.37139L25.0321 8.34455L25.0321 8.34455L26.0053 7.37139ZM26.0053 9.33591L25.0321 8.36274L25.0321 8.36274L26.0053 9.33591ZM24.0408 9.33591L25.0139 8.36274V8.36274L24.0408 9.33591ZM29.8708 18.0474L30.844 17.0742L29.8708 18.0474ZM31.8171 16.101L30.844 17.0742L31.8171 16.101ZM31.8171 31.8172L30.844 30.844L31.8171 31.8172ZM16.101 16.101L17.0742 17.0742L16.101 16.101ZM16.101 31.8172L17.0742 30.844H17.0742L16.101 31.8172ZM38.664 23.9591L39.6372 22.9859L39.6372 22.9859L38.664 23.9591ZM38.664 21.9946L39.6372 22.9678L39.6372 22.9678L38.664 21.9946ZM40.6285 25.9236L39.6554 26.8968V26.8968L40.6285 25.9236ZM42.593 25.9236L43.5662 26.8968L43.5662 26.8968L42.593 25.9236ZM5.40687 22.0764L6.38003 23.0495L6.38003 23.0495L5.40687 22.0764ZM5.40687 24.0409L6.38003 23.0677H6.38003L5.40687 24.0409ZM7.37139 22.0764L6.39822 23.0495L6.39822 23.0495L7.37139 22.0764ZM9.33591 24.0409L10.3091 23.0677L10.3091 23.0677L9.33591 24.0409ZM9.33591 26.0054L10.3091 26.9786L10.3091 26.9786L9.33591 26.0054ZM7.37139 26.0054L6.39822 26.9786L6.39822 26.9786L7.37139 26.0054ZM33.3579 13.0964L34.331 12.1233L34.331 12.1233L33.3579 13.0964ZM33.3579 11.1319L32.3847 10.1587L32.3847 10.1587L33.3579 11.1319ZM34.3401 14.0787L33.3669 15.0518L33.3669 15.0518L34.3401 14.0787ZM36.3046 14.0787L37.2778 15.0518L37.2778 15.0518L36.3046 14.0787ZM36.3046 12.1142L35.3315 13.0873L35.3315 13.0873L36.3046 12.1142ZM35.3224 11.1319L36.2955 10.1587L36.2955 10.1587L35.3224 11.1319ZM11.1318 33.3579L12.1049 34.3311L12.1049 34.3311L11.1318 33.3579ZM11.1318 35.3224L10.1586 36.2956L10.1586 36.2956L11.1318 35.3224ZM13.0963 33.3579L12.1231 34.3311L12.1231 34.3311L13.0963 33.3579ZM14.0786 34.3402L13.1054 35.3133L14.0786 34.3402ZM14.0786 36.3047L13.1054 35.3315L14.0786 36.3047ZM12.114 36.3047L13.0872 35.3315L13.0872 35.3315L12.114 36.3047ZM35.3224 33.3579L36.2955 32.3847V32.3847L35.3224 33.3579ZM36.3046 34.3402L35.3315 35.3133L35.3315 35.3133L36.3046 34.3402ZM11.1318 13.0964L12.1049 12.1233L12.1049 12.1233L11.1318 13.0964ZM14.0786 14.0787L15.0517 15.0518V15.0518L14.0786 14.0787ZM12.114 14.0787L11.1409 15.0518L12.114 14.0787ZM21.9945 40.6286L21.0213 41.6018H21.0213L21.9945 40.6286ZM21.9945 38.6641L21.0213 37.6909L21.0213 37.6909L21.9945 38.6641ZM23.959 42.5931L24.9322 41.62L24.9322 41.62L23.959 42.5931ZM25.9236 40.6286L24.9504 41.6018L24.9504 41.6018L25.9236 40.6286ZM23.959 38.6641L24.9322 37.6909L24.9322 37.6909L23.959 38.6641ZM21.1031 4.4337C20.0231 5.51365 20.0231 7.2646 21.1031 8.34455L23.0494 6.39822C23.0475 6.39631 23.0468 6.39529 23.0467 6.39516C23.0466 6.39496 23.0466 6.39485 23.0465 6.39466C23.0463 6.39412 23.0456 6.39219 23.0456 6.38913C23.0456 6.38607 23.0463 6.38413 23.0465 6.38359C23.0466 6.3834 23.0466 6.38329 23.0467 6.3831C23.0468 6.38296 23.0475 6.38194 23.0494 6.38003L21.1031 4.4337ZM25.0139 4.4337C23.934 3.35374 22.183 3.35374 21.1031 4.4337L23.0494 6.38003C23.0513 6.37813 23.0523 6.37746 23.0525 6.37737C23.0527 6.37724 23.0528 6.37718 23.053 6.37711C23.0535 6.37689 23.0554 6.37627 23.0585 6.37627C23.0616 6.37627 23.0635 6.37689 23.064 6.37711C23.0642 6.37718 23.0643 6.37724 23.0645 6.37737C23.0647 6.37746 23.0657 6.37813 23.0676 6.38003L25.0139 4.4337ZM26.9784 6.39822L25.0139 4.4337L23.0676 6.38003L25.0321 8.34455L26.9784 6.39822ZM26.9784 10.3091C28.0584 9.22912 28.0584 7.47817 26.9784 6.39822L25.0321 8.34455C25.034 8.34646 25.0347 8.34749 25.0348 8.34762C25.0349 8.34782 25.035 8.34792 25.035 8.34811C25.0353 8.34866 25.0359 8.35059 25.0359 8.35365C25.0359 8.3567 25.0353 8.35864 25.035 8.35918C25.035 8.35937 25.0349 8.35947 25.0348 8.35967C25.0347 8.35981 25.034 8.36083 25.0321 8.36274L26.9784 10.3091ZM23.0676 10.3091C24.1475 11.389 25.8985 11.389 26.9784 10.3091L25.0321 8.36274C25.0302 8.36464 25.0292 8.36532 25.029 8.3654C25.0288 8.36553 25.0287 8.36559 25.0286 8.36566C25.028 8.36589 25.0261 8.3665 25.023 8.3665C25.02 8.3665 25.018 8.36589 25.0175 8.36566C25.0173 8.36559 25.0172 8.36553 25.017 8.3654C25.0169 8.36532 25.0158 8.36464 25.0139 8.36274L23.0676 10.3091ZM21.1031 8.34455L23.0676 10.3091L25.0139 8.36274L23.0494 6.39822L21.1031 8.34455ZM28.8976 19.0205C31.6251 21.748 31.6251 26.1702 28.8976 28.8977L30.844 30.844C34.6464 27.0416 34.6464 20.8766 30.844 17.0742L28.8976 19.0205ZM19.0205 19.0205C21.748 16.293 26.1701 16.293 28.8976 19.0205L30.844 17.0742C27.0415 13.2718 20.8766 13.2718 17.0742 17.0742L19.0205 19.0205ZM19.0205 28.8977C16.293 26.1702 16.293 21.748 19.0205 19.0205L17.0742 17.0742C13.2717 20.8766 13.2717 27.0416 17.0742 30.844L19.0205 28.8977ZM28.8976 28.8977C26.1701 31.6252 21.748 31.6252 19.0205 28.8977L17.0742 30.844C20.8766 34.6465 27.0415 34.6465 30.844 30.844L28.8976 28.8977ZM30.844 17.0742C34.6464 20.8766 34.6464 27.0416 30.844 30.844L32.7903 32.7904C37.6677 27.913 37.6677 20.0052 32.7903 15.1279L30.844 17.0742ZM17.0742 17.0742C20.8766 13.2718 27.0415 13.2718 30.844 17.0742L32.7903 15.1279C27.913 10.2505 20.0052 10.2505 15.1278 15.1279L17.0742 17.0742ZM17.0742 30.844C13.2717 27.0416 13.2717 20.8766 17.0742 17.0742L15.1278 15.1279C10.2505 20.0052 10.2505 27.913 15.1278 32.7904L17.0742 30.844ZM30.844 30.844C27.0415 34.6465 20.8766 34.6465 17.0742 30.844L15.1278 32.7904C20.0052 37.6677 27.913 37.6677 32.7903 32.7904L30.844 30.844ZM39.6372 22.9859C39.6353 22.984 39.6346 22.983 39.6345 22.9829C39.6344 22.9827 39.6343 22.9826 39.6343 22.9824C39.634 22.9818 39.6334 22.9799 39.6334 22.9768C39.6334 22.9738 39.634 22.9719 39.6343 22.9713C39.6343 22.9711 39.6344 22.971 39.6345 22.9708C39.6346 22.9707 39.6353 22.9697 39.6372 22.9678L37.6908 21.0214C36.6109 22.1014 36.6109 23.8523 37.6908 24.9323L39.6372 22.9859ZM41.6017 24.9505L39.6372 22.9859L37.6908 24.9323L39.6554 26.8968L41.6017 24.9505ZM41.6199 24.9505C41.618 24.9524 41.6169 24.953 41.6168 24.9531C41.6166 24.9533 41.6165 24.9533 41.6163 24.9534C41.6158 24.9536 41.6138 24.9542 41.6108 24.9542C41.6077 24.9542 41.6058 24.9536 41.6053 24.9534C41.6051 24.9533 41.605 24.9533 41.6048 24.9531C41.6046 24.953 41.6036 24.9524 41.6017 24.9505L39.6554 26.8968C40.7353 27.9767 42.4863 27.9767 43.5662 26.8968L41.6199 24.9505ZM41.6199 24.9323C41.6218 24.9342 41.6225 24.9352 41.6225 24.9353C41.6227 24.9355 41.6227 24.9356 41.6228 24.9358C41.623 24.9364 41.6236 24.9383 41.6236 24.9414C41.6236 24.9444 41.623 24.9464 41.6228 24.9469C41.6227 24.9471 41.6227 24.9472 41.6225 24.9474C41.6225 24.9475 41.6218 24.9486 41.6199 24.9505L43.5662 26.8968C44.6462 25.8168 44.6462 24.0659 43.5662 22.9859L41.6199 24.9323ZM39.6554 22.9678L41.6199 24.9323L43.5662 22.9859L41.6017 21.0214L39.6554 22.9678ZM39.6372 22.9678C39.6391 22.9658 39.6401 22.9652 39.6402 22.9651C39.6404 22.965 39.6405 22.9649 39.6407 22.9648C39.6413 22.9646 39.6432 22.964 39.6463 22.964C39.6493 22.964 39.6513 22.9646 39.6518 22.9648C39.652 22.9649 39.6521 22.965 39.6523 22.9651C39.6524 22.9652 39.6535 22.9659 39.6554 22.9678L41.6017 21.0214C40.5217 19.9415 38.7708 19.9415 37.6908 21.0214L39.6372 22.9678ZM4.4337 21.1032C3.35374 22.1832 3.35374 23.9341 4.4337 25.0141L6.38003 23.0677C6.37813 23.0658 6.37746 23.0648 6.37737 23.0647C6.37724 23.0645 6.37718 23.0644 6.37711 23.0642C6.37689 23.0636 6.37627 23.0617 6.37627 23.0586C6.37627 23.0556 6.37689 23.0536 6.37711 23.0531C6.37718 23.0529 6.37724 23.0528 6.37737 23.0526C6.37746 23.0525 6.37813 23.0514 6.38003 23.0495L4.4337 21.1032ZM8.34455 21.1032C7.2646 20.0233 5.51365 20.0233 4.4337 21.1032L6.38003 23.0495C6.38194 23.0476 6.38297 23.047 6.3831 23.0469C6.3833 23.0467 6.3834 23.0467 6.38359 23.0466C6.38414 23.0464 6.38607 23.0458 6.38913 23.0458C6.39218 23.0458 6.39412 23.0464 6.39466 23.0466C6.39485 23.0467 6.39495 23.0467 6.39515 23.0469C6.39529 23.047 6.39631 23.0476 6.39822 23.0495L8.34455 21.1032ZM10.3091 23.0677L8.34455 21.1032L6.39822 23.0495L8.36274 25.0141L10.3091 23.0677ZM10.3091 26.9786C11.389 25.8986 11.389 24.1477 10.3091 23.0677L8.36274 25.0141C8.36464 25.016 8.36531 25.017 8.3654 25.0171C8.36553 25.0173 8.36559 25.0174 8.36566 25.0176C8.36588 25.0182 8.3665 25.0201 8.3665 25.0232C8.3665 25.0262 8.36588 25.0281 8.36566 25.0287C8.36559 25.0289 8.36553 25.029 8.3654 25.0292C8.36531 25.0293 8.36464 25.0303 8.36274 25.0322L10.3091 26.9786ZM6.39822 26.9786C7.47817 28.0585 9.22912 28.0585 10.3091 26.9786L8.36274 25.0322C8.36083 25.0342 8.35981 25.0348 8.35968 25.0349C8.35948 25.035 8.35937 25.0351 8.35918 25.0352C8.35864 25.0354 8.35671 25.036 8.35365 25.036C8.35059 25.036 8.34865 25.0354 8.34811 25.0352C8.34792 25.0351 8.34781 25.035 8.34762 25.0349C8.34748 25.0348 8.34646 25.0342 8.34455 25.0322L6.39822 26.9786ZM4.4337 25.0141L6.39822 26.9786L8.34455 25.0322L6.38003 23.0677L4.4337 25.0141ZM34.331 12.1233C34.3291 12.1213 34.3284 12.1203 34.3284 12.1202C34.3282 12.12 34.3282 12.1199 34.3281 12.1197C34.3279 12.1191 34.3273 12.1172 34.3273 12.1142C34.3273 12.1111 34.3279 12.1092 34.3281 12.1086C34.3282 12.1084 34.3282 12.1083 34.3284 12.1081C34.3284 12.108 34.3291 12.107 34.331 12.1051L32.3847 10.1587C31.3047 11.2387 31.3047 12.9896 32.3847 14.0696L34.331 12.1233ZM35.3133 13.1055L34.331 12.1233L32.3847 14.0696L33.3669 15.0518L35.3133 13.1055ZM35.3315 13.1055C35.3296 13.1074 35.3285 13.1081 35.3284 13.1082C35.3282 13.1083 35.3281 13.1084 35.3279 13.1084C35.3274 13.1087 35.3254 13.1093 35.3224 13.1093C35.3193 13.1093 35.3174 13.1087 35.3168 13.1084C35.3167 13.1084 35.3165 13.1083 35.3163 13.1082C35.3162 13.1081 35.3152 13.1074 35.3133 13.1055L33.3669 15.0518C34.4469 16.1318 36.1978 16.1318 37.2778 15.0518L35.3315 13.1055ZM35.3315 13.0873C35.3334 13.0892 35.334 13.0903 35.3341 13.0904C35.3343 13.0906 35.3343 13.0907 35.3344 13.0909C35.3346 13.0914 35.3352 13.0934 35.3352 13.0964C35.3352 13.0995 35.3346 13.1014 35.3344 13.102C35.3343 13.1021 35.3343 13.1023 35.3341 13.1024C35.334 13.1026 35.3334 13.1036 35.3315 13.1055L37.2778 15.0518C38.3578 13.9719 38.3578 12.2209 37.2778 11.141L35.3315 13.0873ZM34.3492 12.1051L35.3315 13.0873L37.2778 11.141L36.2955 10.1587L34.3492 12.1051ZM34.331 12.1051C34.3329 12.1032 34.334 12.1025 34.3341 12.1024C34.3343 12.1023 34.3344 12.1022 34.3346 12.1021C34.3351 12.1019 34.3371 12.1013 34.3401 12.1013C34.3432 12.1013 34.3451 12.1019 34.3457 12.1021C34.3458 12.1022 34.3459 12.1023 34.3461 12.1024C34.3463 12.1025 34.3473 12.1032 34.3492 12.1051L36.2955 10.1587C35.2156 9.07878 33.4646 9.07878 32.3847 10.1587L34.331 12.1051ZM10.1586 32.3847C9.07866 33.4647 9.07866 35.2156 10.1586 36.2956L12.1049 34.3493C12.103 34.3474 12.1024 34.3463 12.1023 34.3462C12.1022 34.346 12.1021 34.3459 12.102 34.3457C12.1018 34.3452 12.1012 34.3432 12.1012 34.3402C12.1012 34.3371 12.1018 34.3352 12.102 34.3346C12.1021 34.3344 12.1022 34.3343 12.1023 34.3341C12.1024 34.334 12.103 34.333 12.1049 34.3311L10.1586 32.3847ZM14.0695 32.3847C12.9895 31.3048 11.2386 31.3048 10.1586 32.3847L12.1049 34.3311C12.1069 34.3292 12.1079 34.3285 12.108 34.3284C12.1082 34.3283 12.1083 34.3282 12.1085 34.3281C12.109 34.3279 12.111 34.3273 12.114 34.3273C12.1171 34.3273 12.119 34.3279 12.1196 34.3281C12.1198 34.3282 12.1199 34.3283 12.1201 34.3284C12.1202 34.3285 12.1212 34.3292 12.1231 34.3311L14.0695 32.3847ZM15.0517 33.367L14.0695 32.3847L12.1231 34.3311L13.1054 35.3133L15.0517 33.367ZM15.0517 37.2779C16.1317 36.1979 16.1317 34.447 15.0517 33.367L13.1054 35.3133C13.1073 35.3152 13.108 35.3163 13.1081 35.3164C13.1082 35.3166 13.1082 35.3167 13.1083 35.3169C13.1085 35.3174 13.1092 35.3194 13.1092 35.3224C13.1092 35.3255 13.1085 35.3274 13.1083 35.328C13.1082 35.3281 13.1082 35.3283 13.1081 35.3285C13.108 35.3286 13.1073 35.3296 13.1054 35.3315L15.0517 37.2779ZM11.1409 37.2779C12.2208 38.3578 13.9718 38.3578 15.0517 37.2779L13.1054 35.3315C13.1035 35.3334 13.1025 35.3341 13.1023 35.3342C13.1021 35.3343 13.102 35.3344 13.1018 35.3344C13.1013 35.3347 13.0994 35.3353 13.0963 35.3353C13.0932 35.3353 13.0913 35.3347 13.0908 35.3344C13.0906 35.3344 13.0905 35.3343 13.0903 35.3342C13.0901 35.3341 13.0891 35.3334 13.0872 35.3315L11.1409 37.2779ZM10.1586 36.2956L11.1409 37.2779L13.0872 35.3315L12.1049 34.3493L10.1586 36.2956ZM34.3492 34.3311L35.3315 35.3133L37.2778 33.367L36.2955 32.3847L34.3492 34.3311ZM34.331 34.3311C34.3329 34.3292 34.334 34.3285 34.3341 34.3284C34.3343 34.3283 34.3344 34.3282 34.3346 34.3281C34.3351 34.3279 34.3371 34.3273 34.3401 34.3273C34.3432 34.3273 34.3451 34.3279 34.3457 34.3281C34.3458 34.3282 34.3459 34.3283 34.3461 34.3284C34.3463 34.3285 34.3473 34.3292 34.3492 34.3311L36.2955 32.3847C35.2156 31.3048 33.4646 31.3048 32.3847 32.3847L34.331 34.3311ZM34.331 34.3493C34.3291 34.3474 34.3284 34.3463 34.3284 34.3462C34.3282 34.346 34.3282 34.3459 34.3281 34.3457C34.3279 34.3452 34.3273 34.3432 34.3273 34.3402C34.3273 34.3371 34.3279 34.3352 34.3281 34.3346C34.3282 34.3344 34.3282 34.3343 34.3284 34.3341C34.3284 34.334 34.3291 34.333 34.331 34.3311L32.3847 32.3847C31.3047 33.4647 31.3047 35.2156 32.3847 36.2956L34.331 34.3493ZM35.3133 35.3315L34.331 34.3493L32.3847 36.2956L33.3669 37.2779L35.3133 35.3315ZM35.3315 35.3315C35.3296 35.3334 35.3285 35.3341 35.3284 35.3342C35.3282 35.3343 35.3281 35.3344 35.3279 35.3344C35.3274 35.3347 35.3254 35.3353 35.3224 35.3353C35.3193 35.3353 35.3174 35.3347 35.3168 35.3344C35.3167 35.3344 35.3165 35.3343 35.3163 35.3342C35.3162 35.3341 35.3152 35.3334 35.3133 35.3315L33.3669 37.2779C34.4469 38.3578 36.1978 38.3578 37.2778 37.2779L35.3315 35.3315ZM35.3315 35.3133C35.3334 35.3152 35.334 35.3163 35.3341 35.3164C35.3343 35.3166 35.3343 35.3167 35.3344 35.3169C35.3346 35.3174 35.3352 35.3194 35.3352 35.3224C35.3352 35.3255 35.3346 35.3274 35.3344 35.328C35.3343 35.3282 35.3343 35.3283 35.3341 35.3285C35.334 35.3286 35.3334 35.3296 35.3315 35.3315L37.2778 37.2779C38.3578 36.1979 38.3578 34.447 37.2778 33.367L35.3315 35.3133ZM10.1586 10.1587C9.07866 11.2387 9.07866 12.9896 10.1586 14.0696L12.1049 12.1233C12.103 12.1213 12.1024 12.1203 12.1023 12.1202C12.1022 12.12 12.1021 12.1199 12.102 12.1197C12.1018 12.1191 12.1012 12.1172 12.1012 12.1142C12.1012 12.1111 12.1018 12.1092 12.102 12.1086C12.1021 12.1084 12.1022 12.1083 12.1023 12.1081C12.1024 12.108 12.103 12.107 12.1049 12.1051L10.1586 10.1587ZM14.0695 10.1587C12.9895 9.07878 11.2386 9.07878 10.1586 10.1587L12.1049 12.1051C12.1069 12.1032 12.1079 12.1025 12.108 12.1024C12.1082 12.1023 12.1083 12.1022 12.1085 12.1021C12.109 12.1019 12.111 12.1013 12.114 12.1013C12.1171 12.1013 12.119 12.1019 12.1196 12.1021C12.1198 12.1022 12.1199 12.1023 12.1201 12.1024C12.1202 12.1025 12.1212 12.1032 12.1231 12.1051L14.0695 10.1587ZM15.0517 11.141L14.0695 10.1587L12.1231 12.1051L13.1054 13.0873L15.0517 11.141ZM15.0517 15.0518C16.1317 13.9719 16.1317 12.2209 15.0517 11.141L13.1054 13.0873C13.1073 13.0892 13.108 13.0903 13.1081 13.0904C13.1082 13.0906 13.1082 13.0907 13.1083 13.0909C13.1085 13.0914 13.1092 13.0934 13.1092 13.0964C13.1092 13.0995 13.1085 13.1014 13.1083 13.102C13.1082 13.1021 13.1082 13.1022 13.1081 13.1024C13.108 13.1026 13.1073 13.1036 13.1054 13.1055L15.0517 15.0518ZM11.1409 15.0518C12.2208 16.1318 13.9718 16.1318 15.0517 15.0518L13.1054 13.1055C13.1035 13.1074 13.1025 13.1081 13.1023 13.1082C13.1021 13.1083 13.102 13.1084 13.1018 13.1084C13.1013 13.1087 13.0994 13.1093 13.0963 13.1093C13.0932 13.1093 13.0913 13.1087 13.0908 13.1084C13.0906 13.1084 13.0905 13.1083 13.0903 13.1082C13.0901 13.1081 13.0891 13.1074 13.0872 13.1055L11.1409 15.0518ZM10.1586 14.0696L11.1409 15.0518L13.0872 13.1055L12.1049 12.1233L10.1586 14.0696ZM22.9677 39.6555C22.9658 39.6535 22.9651 39.6525 22.965 39.6524C22.9649 39.6522 22.9648 39.6521 22.9648 39.6519C22.9645 39.6513 22.9639 39.6494 22.9639 39.6464C22.9639 39.6433 22.9645 39.6414 22.9648 39.6408C22.9648 39.6406 22.9649 39.6405 22.965 39.6403C22.9651 39.6402 22.9658 39.6392 22.9677 39.6373L21.0213 37.6909C19.9414 38.7709 19.9414 40.5218 21.0213 41.6018L22.9677 39.6555ZM24.9322 41.62L22.9677 39.6554L21.0213 41.6018L22.9859 43.5663L24.9322 41.62ZM24.9504 41.62C24.9485 41.6219 24.9475 41.6225 24.9473 41.6226C24.9471 41.6228 24.947 41.6228 24.9468 41.6229C24.9463 41.6231 24.9444 41.6237 24.9413 41.6237C24.9382 41.6237 24.9363 41.6231 24.9358 41.6229C24.9356 41.6228 24.9355 41.6228 24.9353 41.6226C24.9351 41.6225 24.9341 41.6219 24.9322 41.62L22.9859 43.5663C24.0658 44.6463 25.8168 44.6463 26.8967 43.5663L24.9504 41.62ZM24.9504 41.6018C24.9523 41.6037 24.953 41.6047 24.9531 41.6049C24.9532 41.605 24.9532 41.6052 24.9533 41.6053C24.9535 41.6059 24.9542 41.6078 24.9542 41.6109C24.9542 41.6139 24.9535 41.6159 24.9533 41.6164C24.9532 41.6166 24.9532 41.6167 24.953 41.6169C24.953 41.617 24.9523 41.6181 24.9504 41.62L26.8967 43.5663C27.9767 42.4864 27.9767 40.7354 26.8967 39.6554L24.9504 41.6018ZM22.9859 39.6373L24.9504 41.6018L26.8967 39.6554L24.9322 37.6909L22.9859 39.6373ZM22.9677 39.6373C22.9696 39.6354 22.9706 39.6347 22.9707 39.6346C22.9709 39.6345 22.971 39.6344 22.9712 39.6343C22.9718 39.6341 22.9737 39.6335 22.9768 39.6335C22.9798 39.6335 22.9818 39.6341 22.9823 39.6343C22.9825 39.6344 22.9826 39.6345 22.9828 39.6346C22.9829 39.6347 22.984 39.6354 22.9859 39.6373L24.9322 37.6909C23.8522 36.611 22.1013 36.611 21.0213 37.6909L22.9677 39.6373Z"
        fill={color}
        mask="url(#path-1-inside-1_101_146)"
      />
    </svg>
  );
};

export default Meteor;
