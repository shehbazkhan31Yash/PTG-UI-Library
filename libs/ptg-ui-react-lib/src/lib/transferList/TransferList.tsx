import React, { useMemo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { TransferItem, PtgUiTransferListProps } from '@ptg-react-libs/interfaces';
import './TransferList.scss';

/**
 * ListItem Component
 * Renders a single item in the transfer list with checkbox
 */
const ListItem = React.memo(
  ({ item, onToggle, selected }: { item: TransferItem; onToggle: (id: string) => void; selected: boolean }) => {
    const checkboxId = `transfer-checkbox-${item.id}`;
    return (
      <li className="list-item">
        <div className="item-content">
          <input
            id={checkboxId}
            data-testid={checkboxId}
            className="item-checkbox"
            type="checkbox"
            checked={selected}
            onChange={() => onToggle(item.id)}
          />
          <label htmlFor={checkboxId} className="item-label">
            {item.label}
          </label>
        </div>
      </li>
    );
  }
);

/**
 * SearchInput Component
 * Renders a search input with icon on the right
 */
const SearchInput = React.memo(
  ({
    value,
    onChange,
    placeholder,
    id,
  }: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    id?: string;
  }) => (
    <div className="search-box">
      <input
        data-testid={id ?? 'transfer-search'}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <SearchIcon className="search-icon" />
    </div>
  )
);

export function PtgUiTransferList({
  id,
  name,
  className,
  disabled,
  searchLeft,
  searchRight,
  leftItems,
  rightItems,
  selectedLeft,
  selectedRight,
  onSearchLeft,
  onSearchRight,
  onToggleLeft,
  onToggleRight,
  onMoveSelectedToRight,
  onMoveSelectedToLeft,
  onMoveAllToRight,
  onMoveAllToLeft,
}: PtgUiTransferListProps) {
  const filteredLeft = useMemo(
    () => leftItems.filter(item => item.label.toLowerCase().includes(searchLeft.toLowerCase())),
    [leftItems, searchLeft]
  );
  const filteredRight = useMemo(
    () => rightItems.filter(item => item.label.toLowerCase().includes(searchRight.toLowerCase())),
    [rightItems, searchRight]
  );

  return (
    <section
      id={id}
      data-testid={name ?? 'ptg-transfer-list'}
      className={`transfer-list ${className ?? ''}`.trim()}
      aria-disabled={disabled}
    >
      <div className="panel list-panel">
        <h6 className="panel-title">Available Items</h6>
        <SearchInput
          id={`${name ?? 'left'}-search`}
          value={searchLeft}
          onChange={e => onSearchLeft(e.target.value)}
          placeholder="Search"
        />
        <div className="list-wrapper">
          <ul className="list-items">
            {filteredLeft.map(item => (
              <ListItem
                key={item.id}
                item={item}
                onToggle={onToggleLeft}
                selected={selectedLeft.has(item.id)}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="transfer-controls">
        <button
          data-testid="move-all-right"
          onClick={onMoveAllToRight}
          title="Move All Right"
          disabled={disabled}
          className="ctrl-btn"
        >
          <KeyboardDoubleArrowRightIcon />
        </button>
        <button
          data-testid="move-selected-right"
          onClick={onMoveSelectedToRight}
          title="Move Selected Right"
          disabled={disabled || selectedLeft.size === 0}
          className="ctrl-btn"
        >
          <ChevronRightIcon />
        </button>
        <button
          data-testid="move-selected-left"
          onClick={onMoveSelectedToLeft}
          title="Move Selected Left"
          disabled={disabled || selectedRight.size === 0}
          className="ctrl-btn"
        >
          <ChevronLeftIcon />
        </button>
        <button
          data-testid="move-all-left"
          onClick={onMoveAllToLeft}
          title="Move All Left"
          disabled={disabled}
          className="ctrl-btn"
        >
          <KeyboardDoubleArrowLeftIcon />
        </button>
      </div>

      <div className="panel list-panel">
        <h6 className="panel-title">Selected Items</h6>
        <SearchInput
          id={`${name ?? 'right'}-search`}
          value={searchRight}
          onChange={e => onSearchRight(e.target.value)}
          placeholder="Search"
        />
        <div className="list-wrapper">
          <ul className="list-items">
            {filteredRight.map(item => (
              <ListItem
                key={item.id}
                item={item}
                onToggle={onToggleRight}
                selected={selectedRight.has(item.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PtgUiTransferList;
