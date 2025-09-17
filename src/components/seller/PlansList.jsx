import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  { name: "Basic", price: "Free", features: ["1 Listing", "Basic Support"] },
  { name: "Premium", price: "$29/mo", features: ["10 Listings", "Priority Support", "Highlighted Ads"] },
  { name: "Boost", price: "$59/mo", features: ["Unlimited Listings", "Top Placement", "24/7 Support"] },
];

export default function PlansList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <Card key={plan.name}>
          <CardHeader><CardTitle>{plan.name}</CardTitle></CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{plan.price}</p>
            <ul className="mt-2 space-y-1">
              {plan.features.map((f, i) => <li key={i}>✅ {f}</li>)}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose {plan.name}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
