import { SectionLabel } from "./SectionLabel";
import { chandrababu, type AddressInfo } from "@/data/chandrababu";

export function AddressSection({ address = chandrababu.address }: { address?: AddressInfo }) {
  return (
    <section className="border-t border-line pt-12">
      <SectionLabel>Ancestral Home & Address</SectionLabel>
      <h3 className="serif mt-4 text-[clamp(1.6rem,3.5vw,2.4rem)] leading-snug">
        Family Residence in Karakonam
      </h3>
      <p className="mt-3 text-ink-soft max-w-[36rem]">
        {address.mapNote}
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="border border-line p-6 md:p-8 bg-[#faf8f5]">
          <p className="kicker">Family / House Name</p>
          <p className="serif text-2xl mt-2 text-ink">{address.houseName}</p>

          <div className="mt-6 space-y-3 text-sm text-ink-soft">
            <p>
              <span className="font-medium text-ink">Post Office:</span> {address.postOffice}
            </p>
            <p>
              <span className="font-medium text-ink">Panchayath / Location:</span> {address.location}
            </p>
            <p>
              <span className="font-medium text-ink">Taluk:</span> {address.taluk}
            </p>
            <p>
              <span className="font-medium text-ink">District & State:</span> {address.district}, {address.state} — {address.pincode}
            </p>
          </div>
        </div>

        <div className="border border-line p-6 md:p-8 flex flex-col justify-between">
          <div>
            <p className="kicker">Full Family Address</p>
            <p className="mt-3 text-lg leading-relaxed font-serif text-ink italic">
              &ldquo;{address.fullAddress}&rdquo;
            </p>
          </div>
          <p className="mt-6 text-xs kicker text-ink-faint">
            Karakonam · Kunnathukal · Thiruvananthapuram · Kerala
          </p>
        </div>
      </div>
    </section>
  );
}
