
import { Metadata } from 'next';
import ProductDetail from './ProductDetail';

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' }
  ];
}

export default function ProductPage({ params }: PageProps) {
  return <ProductDetail productId={params.id} />;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Product ${params.id} - LaRosa Hub`,
    description: `View product ${params.id} details and specifications`,
  };
}
