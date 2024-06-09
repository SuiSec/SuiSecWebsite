"use client";

import { ConnectButton, useCurrentAccount, useSuiClient, useSuiClientContext } from "@mysten/dapp-kit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Demo = () => {
  const ctx = useSuiClientContext();
  const router = useRouter();
  const currentAccount = useCurrentAccount();
  const handelSelect = (value: string) => {
    ctx.selectNetwork(value)
  };
  const handelExecute = () => {
    console.log("executeTransactionBlock");
  };
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-10 justify-between">
        <Button
          variant="secondary"
          size={"lg"}
          onClick={() => router.push("/")}
        >
          Back
        </Button>
        <ConnectButton></ConnectButton>
      </div>
      <div className="flex flex-row gap-10 p-10">
        <div className="basis-1/3 space-y-5 flex flex-col justify-between">
          <Card className="h-80">
            <CardHeader>
              <CardTitle>Demo Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Todo: Add Demo Summary</p>
            </CardContent>
          </Card>
          <Select onValueChange={handelSelect} defaultValue="mainnet">
            <SelectTrigger>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mainnet">Mainet RPC</SelectItem>
              <SelectItem value="riskControl">Risk Control RPC</SelectItem>
            </SelectContent>
          </Select>
          <Button
            disabled={currentAccount ? false : true}
            size={"lg"}
            onClick={handelExecute}
          >
            {currentAccount
              ? "executeTransactionBlock"
              : "connect wallet to execute transaction block"}
          </Button>
        </div>
        <div className="basis-2/3">
          <Card>
            <CardHeader>
              <CardTitle>Executed Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <p>Todo: Add Demo Summary</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
