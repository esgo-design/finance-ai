import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { Transactioncolumns } from "./_columns";
import UpsertTransactionButton from "../_components/add-transaction-button";

const TransactionPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      {/*TITULO E BOTÃO*/}
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold">Transações</h1>
        <UpsertTransactionButton />
      </div>
      <DataTable
        columns={Transactioncolumns}
        data={JSON.parse(JSON.stringify(transactions))}
      />
    </div>
  );
};

export default TransactionPage;
