import Link from 'next/link';
import clsx from 'clsx';
import { Ticket } from '@prisma/client';
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import {
  ArrowUpRightFromSquareIcon,
  PencilIcon,
  TrashIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toCurrencyFromCent } from '@/utils/currency';
import { ticketEditPath, ticketPath } from '@/paths';
import { TICKET_ICONS } from '../constants';
import { TicketDeleteButton } from './ticket-delete-button';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <ArrowUpRightFromSquareIcon className="h-4 w-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketEditPath(ticket.id)}>
        <PencilIcon className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <TicketDeleteButton
      ticket={ticket}
      trigger={
        <Button variant="outline" size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
      }
    />
  );

  return (
    <div
      className={clsx('flex gap-x-1', {
        'w-[580px]': isDetail,
        'w-[420px]': !isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            {ticket.deadline}
          </p>
          <p className="text-sm text-muted-foreground">
            {toCurrencyFromCent(ticket.bounty)}
          </p>
        </CardFooter>
      </Card>

      {isDetail ? (
        <div className="flex flex-col gap-y-1">
          {editButton}
          {deleteButton}
        </div>
      ) : (
        <div className="flex flex-col gap-y-1">
          {detailButton}
          {editButton}
        </div>
      )}
    </div>
  );
};

export { TicketItem };
