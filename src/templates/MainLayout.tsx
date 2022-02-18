import { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Navigation from '../components/navigation/Navigation';
import { PageWrapper, Wrapper } from '../styles/main.styles';
import config from '../utils/config';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: MainProps) => {
  const { pathname } = useRouter();
  return (
    <PageWrapper className="p-2">
      {props.meta}

      <div className="max-w-screen-md w-full mx-auto relative">
        <div>
          {pathname !== '/' && (
            <div className="pb-6">
              <div className="font-extrabold text-6xl text-gray-900">
                <Link href="/">
                  <a>{config.title}</a>
                </Link>
              </div>
            </div>
          )}

          <div className="pt-6">
            <Navigation />
          </div>
        </div>

        <Wrapper className="py-6">{props.children}</Wrapper>

        {/* <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {config.title}
      </div> */}
      </div>
    </PageWrapper>
  );
};

export default Main;
