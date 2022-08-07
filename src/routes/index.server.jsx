import { Layout } from '../components/Layout.server';
import FeaturedCollections from '../components/FeaturedCollections.server';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}
