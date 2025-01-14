import { Button, Sidebar } from 'flowbite-react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiChartPie,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function DashSidebar() {
  return (
    <div className="flex">
      <Sidebar className="w-64 bg-[#15021f] text-white min-h-screen pt-6">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-4 ">
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item icon={HiChartPie} as="div">
                Dashboard
              </Sidebar.Item>
            </Link>

            <Link to="/dashboard?tab=profile">
              <Sidebar.Item icon={HiUser} label="User" labelColor="dark" as="div">
                Profile
              </Sidebar.Item>
            </Link>

            <Link to="/dashboard?tab=posts">
              <Sidebar.Item icon={HiDocumentText} as="div">
                Posts
              </Sidebar.Item>
            </Link>

            <Link to="/dashboard?tab=users">
              <Sidebar.Item icon={HiOutlineUserGroup} as="div">
                Users
              </Sidebar.Item>
            </Link>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
</Sidebar>
    </div>

  );

}


