import { BsLightningChargeFill, BsFillPatchCheckFill } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";

const features = [
  {
    id: 1,
    title: "Unbeatable Quality Checked",
    icon: <BsFillPatchCheckFill className="feature-icon" />,
    description:
      "Every product is stringently tested against quality control measures to ensure optimum performance & satisfaction. Shop with ease knowing that each product is vetted and valued so you get the best in quality and value.",
  },
  {
    id: 2,
    title: "Lightning fast delivery",
    icon: <BsLightningChargeFill className="feature-icon" />,
    description:
      "We make sure you get your items when you need them. Digital Blaze provides lightning-fast shipping and secured payment, so that you can have that new laptop or phone in no time.",
  },
  {
    id: 3,
    title: "Discounts you deserve",
    icon: <TbDiscount2 className="feature-icon" />,
    description:
      "Shop smarter and save more with us–– we offer exclusive privileges and discounts every month so that you get rewarded every time you shop.",
  },
];
export default features;
