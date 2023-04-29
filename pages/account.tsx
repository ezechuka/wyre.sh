import React from 'react';
import withLoading from '@/utils/with-loading';
import UserAccount from '@/components/UserAccount';
import Layout from '@/components/Layout';

function AccountComponent() {
  return (
    <Layout>
      <UserAccount />
    </Layout>
  );
}

export default withLoading(AccountComponent);
