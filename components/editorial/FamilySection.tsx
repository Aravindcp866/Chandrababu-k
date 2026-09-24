import { SectionLabel } from "./SectionLabel";
import { chandrababu } from "@/data/chandrababu";

export function FamilySection() {
  const { houseName, brothers, family, familyNote } = chandrababu;

  return (
    <section className="mt-24">
      <SectionLabel>Family & Heritage</SectionLabel>
      <div className="mt-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-line pb-6">
        <h2 className="serif text-[clamp(1.8rem,4vw,2.8rem)]">
          People Who Remember
        </h2>
        <p className="kicker">
          Family House: <span className="font-serif italic text-ink normal-case text-base ml-1">{houseName}</span>
        </p>
      </div>

      <p className="measure mt-6 text-lg text-ink-soft">
        {familyNote}
      </p>

      {/* Brothers Section */}
      {brothers && brothers.length > 0 && (
        <div className="mt-12">
          <h3 className="kicker text-ink uppercase tracking-wider mb-6">
            Brothers
          </h3>
          <ul className="grid gap-6 sm:grid-cols-2">
            {brothers.map((brother, idx) => (
              <li
                key={`${brother.name}-${idx}`}
                className="border border-line p-6 bg-[#faf8f5]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="serif text-2xl text-ink">{brother.name}</p>
                  <span className="kicker">{brother.relation}</span>
                </div>
                {brother.location && (
                  <p className="text-xs kicker text-ink-faint mt-1">
                    {brother.location}
                  </p>
                )}
                {brother.note && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {brother.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Family Members Section */}
      <div className="mt-12">
        <h3 className="kicker text-ink uppercase tracking-wider mb-6">
          Family Members
        </h3>
        <ul className="divide-y divide-line border-y border-line">
          {family.map((person, index) => (
            <li
              key={`${person.name}-${index}`}
              className="grid gap-2 py-6 md:grid-cols-[12rem_minmax(0,1fr)]"
            >
              <p className="kicker pt-1">{person.relation}</p>
              <div>
                <p className="serif text-2xl">{person.name}</p>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">
                  {person.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
