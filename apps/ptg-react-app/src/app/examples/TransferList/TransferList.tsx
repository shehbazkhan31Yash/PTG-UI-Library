import React, { useState } from 'react';
import './TransferList.scss';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiTransferList} from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';

export interface TransferItem {
	id: string;
	label: string;
}

const componentCode = `
import { PtgUiTransferList, TransferItem } from '@ptg-ui/react';
import { useState } from 'react';

export interface TransferItem {
	id: string;
	label: string;
}

const [searchLeft, setSearchLeft] = useState('');
const [searchRight, setSearchRight] = useState('');
const [leftItems, setLeftItems] = useState<TransferItem[]>([
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
]);
const [rightItems, setRightItems] = useState<TransferItem[]>([]);
const [selectedLeft, setSelectedLeft] = useState<Set<string>>(new Set());
const [selectedRight, setSelectedRight] = useState<Set<string>>(new Set());

// ... handlers ...

<PtgUiTransferList
  name="demo-transfer"
  searchLeft={searchLeft}
  searchRight={searchRight}
  leftItems={leftItems}
  rightItems={rightItems}
  selectedLeft={selectedLeft}
  selectedRight={selectedRight}
  onSearchLeft={handleSearchLeft}
  onSearchRight={handleSearchRight}
  onToggleLeft={handleToggleLeft}
  onToggleRight={handleToggleRight}
  onMoveSelectedToRight={handleMoveSelectedToRight}
  onMoveSelectedToLeft={handleMoveSelectedToLeft}
  onMoveAllToRight={handleMoveAllToRight}
  onMoveAllToLeft={handleMoveAllToLeft}
/>
`;

const htmlCode = `
<PtgUiTransferList
  name="demo-transfer"
  searchLeft={searchLeft}
  searchRight={searchRight}
  leftItems={leftItems}
  rightItems={rightItems}
  selectedLeft={selectedLeft}
  selectedRight={selectedRight}
  onSearchLeft={handleSearchLeft}
  onSearchRight={handleSearchRight}
  onToggleLeft={handleToggleLeft}
  onToggleRight={handleToggleRight}
  onMoveSelectedToRight={handleMoveSelectedToRight}
  onMoveSelectedToLeft={handleMoveSelectedToLeft}
  onMoveAllToRight={handleMoveAllToRight}
  onMoveAllToLeft={handleMoveAllToLeft}
/>
`;

export function TransferList() {
  const { t } = useTranslation();
  const [showCode, setShowCode] = useState(false);
  const [searchLeft, setSearchLeft] = useState('');
  const [searchRight, setSearchRight] = useState('');
  const [leftItems, setLeftItems] = useState<TransferItem[]>([
    { id: '1', label: 'List item 1' },
    { id: '2', label: 'List item 2' },
    { id: '3', label: 'List item 3' },
    { id: '4', label: 'List item 4' },
    { id: '5', label: 'List item 5' },
    { id: '6', label: 'List item 6' },
    { id: '7', label: 'List item 7' },
    { id: '8', label: 'List item 8' },
  ]);
  const [rightItems, setRightItems] = useState<TransferItem[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<Set<string>>(new Set());
  const [selectedRight, setSelectedRight] = useState<Set<string>>(new Set());

  const toggleShowCode = () => setShowCode(prev => !prev);

  const handleSearchLeft = (val: string) => setSearchLeft(val);
  const handleSearchRight = (val: string) => setSearchRight(val);
  const handleToggleLeft = (id: string) => {
    setSelectedLeft(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };
  const handleToggleRight = (id: string) => {
    setSelectedRight(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };
  const handleMoveSelectedToRight = () => {
    const selected = leftItems.filter(item => selectedLeft.has(item.id));
    setRightItems(prev => [...prev, ...selected]);
    setLeftItems(prev => prev.filter(item => !selectedLeft.has(item.id)));
    setSelectedLeft(new Set());
  };
  const handleMoveSelectedToLeft = () => {
    const selected = rightItems.filter(item => selectedRight.has(item.id));
    setLeftItems(prev => [...prev, ...selected]);
    setRightItems(prev => prev.filter(item => !selectedRight.has(item.id)));
    setSelectedRight(new Set());
  };
  const handleMoveAllToRight = () => {
    setRightItems(prev => [...prev, ...leftItems]);
    setLeftItems([]);
    setSelectedLeft(new Set());
  };
  const handleMoveAllToLeft = () => {
    setLeftItems(prev => [...prev, ...rightItems]);
    setRightItems([]);
    setSelectedRight(new Set());
  };

  return (
    <>
      <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading">{t ? t('TRANSFER_LIST_EXAMPLE') : 'Transfer List'}</h5>
          </div>
          <div className="col-2">
            <CodeIcon onClick={toggleShowCode} fontSize="large" className="show-code-icon" />
          </div>
          <hr className="horizontal-line" />
        </div>
        {showCode && <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />}

        <div className="col-lg-8 mb-3 col-sm-12 col-xs-12 m-3">
          <PtgUiTransferList
            name="demo-transfer"
            searchLeft={searchLeft}
            searchRight={searchRight}
            leftItems={leftItems}
            rightItems={rightItems}
            selectedLeft={selectedLeft}
            selectedRight={selectedRight}
            onSearchLeft={handleSearchLeft}
            onSearchRight={handleSearchRight}
            onToggleLeft={handleToggleLeft}
            onToggleRight={handleToggleRight}
            onMoveSelectedToRight={handleMoveSelectedToRight}
            onMoveSelectedToLeft={handleMoveSelectedToLeft}
            onMoveAllToRight={handleMoveAllToRight}
            onMoveAllToLeft={handleMoveAllToLeft}
          />
        </div>
      </section>
    </>
  );
}

export default TransferList;