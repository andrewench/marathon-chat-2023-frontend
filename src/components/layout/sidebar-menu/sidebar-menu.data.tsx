import {
  BookOpenCheck,
  CalendarCheck,
  ClipboardList,
  FileCheck,
  LayoutGrid,
  MessagesSquare,
  ScrollText,
  Users2,
  Webcam,
} from 'lucide-react'
import { ReactNode } from 'react'

interface ISideBarItem {
  label: string
  icon: ReactNode
}

export const SideBarMenuList: ISideBarItem[] = [
  {
    label: 'Dashboard',
    icon: <LayoutGrid strokeWidth={1} />,
  },
  {
    label: 'Courses',
    icon: <BookOpenCheck strokeWidth={1} />,
  },
  {
    label: 'Routine',
    icon: <ClipboardList strokeWidth={1} />,
  },
  {
    label: 'Exam',
    icon: <CalendarCheck strokeWidth={1} />,
  },
  {
    label: 'Results',
    icon: <FileCheck strokeWidth={1} />,
  },
  {
    label: 'Students',
    icon: <Users2 strokeWidth={1} />,
  },
  {
    label: 'Message',
    icon: <MessagesSquare strokeWidth={1} />,
  },
  {
    label: 'Notice Board',
    icon: <ScrollText strokeWidth={1} />,
  },
  {
    label: 'Live Class',
    icon: <Webcam strokeWidth={1} />,
  },
]
