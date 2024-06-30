'use client';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil } from 'lucide-react';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Job } from '@prisma/client';

export const vacancyColumns: ColumnDef<Job>[] = [
  {
    accessorKey: 'countryName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Country
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="text-left"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'isNew',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          New
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isNew = row.getValue('isNew') || false;

      return (
        <Badge
          className={cn('bg-slate-500 text-white', isNew && 'bg-secondary')}
        >
          {isNew ? 'New' : 'Old'}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    header: () => {
      return <p>Action</p>;
    },
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <Button variant={'ghost'} className="h-4 w-8 p-0">
          <Link href={`/vacancy/${id}`}>
            <Pencil className="h-4 w-4 mr-2 hover:text-secondary" />
          </Link>
        </Button>
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant={'ghost'} className="h-4 w-8 p-0">
        //       <span className="sr-only">Open menu</span>

        //       <MoreHorizontal className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>

        //   <DropdownMenuContent>
        //     <Link href={`/country/${id}`}>
        //       <DropdownMenuItem>
        //         <Pencil className="h-4 w-4 mr-2" />
        //         Edit
        //       </DropdownMenuItem>
        //     </Link>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];
