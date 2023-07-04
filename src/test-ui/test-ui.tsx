import React, { memo } from 'react';

const TestUI: React.FC = () => {
  return (
    <div>
      <h2 style={{ marginBottom: 50 }}>Cài thư viện từ npm và test UI tại đây (npm run dev)</h2>
    </div>
  );
};

export default memo(TestUI);
