import './toaster.css';
import ToasterWithDefaultProps from './toasterWithDefaultProps';
import ToasterWithCustomIcon from './toasterWithCustomIcon';
import ToasterWithCloseAction from './toasterWithCloseAction';
import ToasterWithCustomAlignment from './toasterWithCustomAlignment';
import ToasterWithDescription from './toasterWithDescription';
export default function Toaster() {
  return (
    <>
   <ToasterWithDefaultProps/>
   <ToasterWithCustomIcon/>
   <ToasterWithCloseAction/>
   <ToasterWithCustomAlignment/>
   <ToasterWithDescription/>
    </>
  );
}