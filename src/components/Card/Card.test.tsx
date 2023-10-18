/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import '@testing-library/jest-dom';

const mockItem = {
    image: 'testImage.jpg',
    rating: 4,
    reviews: 'testReviews',
    reviewsCount: 5,
    description: 'testDescription',
    price: 100,
    discount: 10,
    stock: true,
};

describe('Card Component', () => {
    beforeEach(() => {
        render(<Card item={mockItem} />);
    });

    test('renders image', () => {
        const imageElement = screen.getByAltText('Описание изображения');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', mockItem.image);
    });

    test('renders rating and reviews', () => {
        const ratingElement = screen.getByText(
            `Отзывы(${mockItem.reviewsCount})`
        );
        expect(ratingElement).toBeInTheDocument();
        expect(ratingElement).toHaveAttribute('href', mockItem.reviews);
    });

    test('renders description', () => {
        const descriptionElement = screen.getByText(mockItem.description);
        expect(descriptionElement).toBeInTheDocument();
    });

    test('renders price with discount', () => {
        const priceElement = screen.getByText(
            `₽ ${(
                mockItem.price -
                mockItem.price * (mockItem.discount / 100)
            ).toFixed(2)}`
        );
        expect(priceElement).toBeInTheDocument();
    });

    test('renders stock status', () => {
        const stockElement = screen.getByText('В наличии');
        expect(stockElement).toBeInTheDocument();
    });
});
