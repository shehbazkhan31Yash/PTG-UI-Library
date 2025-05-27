'use client';

import { Card, Flex, Space, Typography } from 'antd';
import { dashboardCardData } from './dashboardData';
import Link from 'next/link';

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <div className="text-center pb-4">
        <Title level={1} className="!mb-2 !text-[#0056b3]">
          PTG UI Apps
        </Title>
        <p>Below is the list of UI competencies apps.</p>
      </div>
      <Flex wrap gap="large" justify="center">
        {dashboardCardData.map((it, index) => {
          return (
            <Card key={index + 1} className="dashboardCard w-[23rem]">
              <Card.Meta
                title={
                  <Title level={4} className="dashboardCardTitle">
                    {it.title}
                  </Title>
                }
                description={
                  <p className="pb-4 text-black">{it.description}</p>
                }
              />
              <Space size={'small'} className="py-4">
                {it.view.length > 0 && it.viewUrl && (
                  <Link
                    className="bg-blue-700 hover:bg-blue-700 hover:text-white text-white focus:outline-none text-center py-2 px-4 rounded-md"
                    href={it.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {it.view}
                  </Link>
                )}
                {it.documentation.length > 0 && it.documentationUrl && (
                  <Link
                    className="bg-gray-600 hover:bg-gray-600 text-white focus:outline-none text-center py-2 px-4 rounded-md"
                    href={it.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {it.documentation}
                  </Link>
                )}
                {it.download.length > 0 && (
                  <Link
                    className="bg-blue-700 hover:bg-blue-600 hover:text-white text-white focus:outline-none text-center py-2 px-4 rounded-md"
                    href={'#'}
                  >
                    {it.download}
                  </Link>
                )}
              </Space>
            </Card>
          );
        })}
      </Flex>
    </>
  );
}
