import PlansList from "@/components/seller/PlansList";
import UpgradePlan from "@/components/UpgradePlan/UpagradePlane";

export default function PlansPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
      <UpgradePlan />
    </div>
  );
}
