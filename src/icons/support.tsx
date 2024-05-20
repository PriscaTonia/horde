import React from "react";

interface Props {
  fill?: string;
}

const SupportIcon = ({ fill = "#606060" }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_696_9994)">
        <path
          d="M13.0588 24.3529L12.7794 21H12.5C9.8549 21 7.61029 20.0779 5.76618 18.2338C3.92206 16.3897 3 14.1451 3 11.5C3 8.8549 3.92206 6.61029 5.76618 4.76618C7.61029 2.92206 9.8549 2 12.5 2C13.8225 2 15.0568 2.24663 16.2028 2.73988C17.3487 3.23314 18.3546 3.91304 19.2204 4.77959C20.0862 5.64614 20.7657 6.65202 21.259 7.79723C21.7523 8.94245 21.9993 10.1767 22 11.5C22 12.8971 21.772 14.2382 21.316 15.5235C20.86 16.8088 20.2356 18.001 19.4428 19.1C18.6515 20.199 17.7108 21.1956 16.6208 22.0897C15.5307 22.9838 14.3434 23.7382 13.0588 24.3529ZM15.2941 20.2735C16.6167 19.1559 17.6926 17.8475 18.5219 16.3484C19.3512 14.8492 19.7655 13.2331 19.7647 11.5C19.7647 9.46961 19.0613 7.75141 17.6546 6.34541C16.2478 4.93941 14.5296 4.23604 12.5 4.23529C10.4696 4.23529 8.75141 4.93867 7.34541 6.34541C5.93941 7.75216 5.23604 9.47035 5.23529 11.5C5.23529 13.5304 5.93867 15.249 7.34541 16.6557C8.75216 18.0624 10.4704 18.7654 12.5 18.7647H15.2941V20.2735ZM12.4721 17.6191C12.7887 17.6191 13.0588 17.5074 13.2824 17.2838C13.5059 17.0603 13.6176 16.7902 13.6176 16.4735C13.6176 16.1569 13.5059 15.8868 13.2824 15.6632C13.0588 15.4397 12.7887 15.3279 12.4721 15.3279C12.1554 15.3279 11.8853 15.4397 11.6618 15.6632C11.4382 15.8868 11.3265 16.1569 11.3265 16.4735C11.3265 16.7902 11.4382 17.0603 11.6618 17.2838C11.8853 17.5074 12.1554 17.6191 12.4721 17.6191ZM11.6618 14.0706H13.3382C13.3382 13.5118 13.3941 13.1206 13.5059 12.8971C13.6176 12.6735 13.9716 12.2637 14.5676 11.6676C14.9029 11.3324 15.1824 10.9691 15.4059 10.5779C15.6294 10.1868 15.7412 9.76765 15.7412 9.32059C15.7412 8.37059 15.42 7.65827 14.7778 7.18365C14.1355 6.70902 13.3762 6.47133 12.5 6.47059C11.6804 6.47059 10.9912 6.69896 10.4324 7.1557C9.87353 7.61245 9.48235 8.16643 9.25882 8.81765L10.8235 9.43235C10.9167 9.11568 11.0936 8.80386 11.3544 8.49688C11.6152 8.1899 11.9971 8.03604 12.5 8.03529C13.0029 8.03529 13.3803 8.175 13.6322 8.45441C13.884 8.73382 14.0096 9.04118 14.0088 9.37647C14.0088 9.69314 13.9157 9.97739 13.7294 10.2292C13.5431 10.4811 13.3196 10.737 13.0588 10.9971C12.4069 11.5559 12.0112 11.9985 11.8719 12.3248C11.7325 12.6512 11.6625 13.2331 11.6618 14.0706Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_696_9994">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SupportIcon;
