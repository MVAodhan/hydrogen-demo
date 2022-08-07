import {
  useShopQuery,
  CacheLong,
  gql,
  useUrl,
  Link,
  Seo,
} from '@shopify/hydrogen';
import { Suspense } from 'react';

import Header from './Header.client';

export const Layout = ({ children }) => {
  const { pathname } = useUrl();

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });
  const isHome = pathname === '/';
  return (
    <>
      <Suspense>
        <Seo
          type="defaultSeo"
          data={{
            title: shop.name,
            description: shop.description,
          }}
        />
        <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
          <div className="">
            <a href="#mainContent" className="sr-only">
              Skip to content
            </a>
          </div>
          <Header shop={shop} />

          <main role="main" id="mainContent" className="flex-grow">
            {children}
          </main>
        </div>
      </Suspense>
    </>
  );
};

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
