import { ICardUiProps } from '../interfaces';
import { PtgUiButton, CARD_BUTTON } from '@ptg-ui/react';

export function PtgUiCard(props: Readonly<ICardUiProps>) {
	const {
		image,
		title,
		description,
		buttonText,
		onClick = () => {
			return;
		},
		buttonColor = CARD_BUTTON.COLOR,
		buttonWidth = CARD_BUTTON.WIDTH,
		children,
		imageWidth,
		imageHeight,
		backgroundColor = '',
		buttonTextColor = CARD_BUTTON.TEXT_COLOR,
	} = props;

	return (
		<div className="card m-2" style={{ backgroundColor }}>
			{image && (
				<img
					src={image}
					className="card-img-top"
					alt="card"
					style={{
						width: imageWidth,
						height: imageHeight,
						maxWidth: CARD_BUTTON.MAX_WIDTH,
						maxHeight: CARD_BUTTON.MAX_HEIGHT,
					}}
				/>
			)}
			<div className="card-content">
				<div className="card-body">
					{title && <h5 className="card-title">{title}</h5>}
					{description && <p className="card-text">{description}</p>}
					{buttonText && (
						<PtgUiButton
							className="btn btn-primary go-somewhere-button"
							text={buttonText}
							textColor={buttonTextColor}
							backgroundColor={buttonColor}
							width={buttonWidth}
							onClick={onClick}
						/>
					)}
					{children}
				</div>
			</div>
		</div>
	);
}
export default PtgUiCard;
