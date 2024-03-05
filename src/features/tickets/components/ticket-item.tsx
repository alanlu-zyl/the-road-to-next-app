import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { ArrowUpRightFromSquareIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ticketPath } from '@/paths';
import { TICKET_ICONS } from '../constants';
import { Ticket } from '../type';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  return (
    <div className="flex gap-x-1">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="line-clamp-3">{ticket.content}</span>
        </CardContent>
      </Card>

      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">
          <Button variant="outline" size="icon" asChild>
            <Link href={ticketPath(ticket.id)}>
              <ArrowUpRightFromSquareIcon className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export { TicketItem };
