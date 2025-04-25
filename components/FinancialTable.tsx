import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const FinancialTable = () => {
    const data = [
      {
        site: "Kankan",
        irradiation: "2085,4",
        ratio: "75%",
        puissance: "150",
        energie: "234 607 500",
        cout: "200 000 000 $",
        prix: "1 500 GNF",
        revenuGNF: "351 911 250 000 GNF",
        taux: "8600",
        revenuUSD: "40 919 912,79 $",
        delai: "4,9"
      },
      {
        site: "Siguiri",
        irradiation: "2085,3",
        ratio: "75%",
        puissance: "150",
        energie: "227 981 250",
        cout: "200 000 000 $",
        prix: "1 500 GNF",
        revenuGNF: "341 971 875 000 GNF",
        taux: "8600",
        revenuUSD: "39 764 171,51 $",
        delai: "5,0"
      },
      {
        site: "Linsan",
        irradiation: "2077,31",
        ratio: "75%",
        puissance: "100",
        energie: "155 798 250",
        cout: "133 333 333 $",
        prix: "1 500 GNF",
        revenuGNF: "233 697 375 000 GNF",
        taux: "8600",
        revenuUSD: "27 174 113,37 $",
        delai: "4,9"
      },
      {
        site: "Sangaredji",
        irradiation: "1940,6",
        ratio: "75%",
        puissance: "80",
        energie: "116 436 000",
        cout: "106 666 666 $",
        prix: "1 500 GNF",
        revenuGNF: "174 654 000 000 GNF",
        taux: "8600",
        revenuUSD: "20 308 604,65 $",
        delai: "5,3"
      },
      {
        site: "Kouroussa",
        irradiation: "2149,8",
        ratio: "75%",
        puissance: "70",
        energie: "112 864 500",
        cout: "93 333 333 $",
        prix: "1 500 GNF",
        revenuGNF: "169 296 750 000 GNF",
        taux: "8600",
        revenuUSD: "19 685 668,60 $",
        delai: "4,7"
      },
      {
        site: "Tougue",
        irradiation: "2136,86",
        ratio: "75%",
        puissance: "45",
        energie: "72 119 025",
        cout: "60 000 000 $",
        prix: "1 500 GNF",
        revenuGNF: "108 178 537 500 GNF",
        taux: "8600",
        revenuUSD: "12 578 899,71 $",
        delai: "4,8"
      },
      {
        site: "Pita",
        irradiation: "2026,5",
        ratio: "75%",
        puissance: "10",
        energie: "15 198 750",
        cout: "13 333 333 $",
        prix: "1 500 GNF",
        revenuGNF: "22 798 125 000 GNF",
        taux: "8600",
        revenuUSD: "2 650 944,77 $",
        delai: "5,0"
      }
    ];
  
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sites</TableHead>
              <TableHead>Irradiation (KMH/M²/AN)</TableHead>
              <TableHead>Ratio de performance</TableHead>
              <TableHead>Puissance (MW)</TableHead>
              <TableHead>Energie (KWH/AN)</TableHead>
              <TableHead>Coût ($US)</TableHead>
              <TableHead>Prix (FGN/KWH)</TableHead>
              <TableHead>Revenu annuel (FGN)</TableHead>
              <TableHead>Taux d'échange</TableHead>
              <TableHead>Revenu annuel ($US)</TableHead>
              <TableHead>Délai ROI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.site}>
                <TableCell className="font-medium">{row.site}</TableCell>
                <TableCell>{row.irradiation}</TableCell>
                <TableCell>{row.ratio}</TableCell>
                <TableCell>{row.puissance}</TableCell>
                <TableCell>{row.energie}</TableCell>
                <TableCell className="min-w-[140px]">{row.cout}</TableCell>
                <TableCell>{row.prix}</TableCell>
                <TableCell className="min-w-[200px]">{row.revenuGNF}</TableCell>
                <TableCell>{row.taux}</TableCell>
                <TableCell className="min-w-[200px]">{row.revenuUSD}</TableCell>
                <TableCell>{row.delai}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default FinancialTable;