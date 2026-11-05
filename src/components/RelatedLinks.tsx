import React from 'react';
import { services, articles, learnerHelp, zones, areasInZone, areaByPath, neighbours } from '../data/site';

/**
 * "Customers also viewed"-style cross-link block.
 * - area page:    services available in that area + nearby areas
 * - service page: the areas this service is available in + other services
 * - article page: services, test centre and area hub
 */
export default function RelatedLinks({ path, kind }: { path: string; kind: 'service' | 'area' | 'article' | 'info' }) {
  const area = kind === 'area' ? areaByPath(path) : undefined;
  const svc = services.find((s) => s.path === path);
  const chip = 'px-4 py-2 bg-white border border-border-main/20 rounded-full text-[0.7rem] font-black text-primary-text uppercase tracking-[0.1em] no-underline transition-all duration-300 hover:border-primary-dark/30 hover:bg-soft-bg/50 hover:shadow-sm';
  const h = 'text-[1.1rem] md:text-[1.3rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none';

  return (
    <section className="bg-soft-bg py-10 lg:py-12 px-6 sm:px-10 border-t border-border-main/10" aria-label="Related pages">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        {area && (
          <>
            <div>
              <h2 className={h}>Driving lessons available in {area.name}</h2>
              <div className="flex flex-wrap gap-2.5">
                {services.map((s) => (
                  <a key={s.path} href={s.path} className={chip}>{s.name.replace(' Driving Lessons', ' Lessons')} in {area.name}</a>
                ))}
              </div>
            </div>
            <div>
              <h2 className={h}>Also covering nearby</h2>
              <div className="flex flex-wrap gap-2.5">
                {neighbours(area).map((n) => (
                  <a key={n.path} href={n.path} className={chip}>{n.name}</a>
                ))}
                <a href={zones.find((z) => z.id === area.zone)!.path} className={chip}>All {zones.find((z) => z.id === area.zone)!.name} areas</a>
              </div>
            </div>
          </>
        )}

        {(svc || kind === 'info') && (
          <div>
            <h2 className={h}>{svc ? `${svc.name} available in` : 'Driving lessons across'} York</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {zones.map((z) => (
                <div key={z.id}>
                  <a href={z.path} className="block text-[0.78rem] font-black uppercase tracking-[0.12em] text-primary-dark no-underline mb-2 hover:underline">{z.name}</a>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {areasInZone(z.id).map((ar) => (
                      <a key={ar.path} href={ar.path} className="text-[0.85rem] font-bold text-secondary-text no-underline hover:text-primary-dark hover:underline">{ar.name}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(svc || kind === 'article' || kind === 'info') && (
          <div>
            <h2 className={h}>{svc ? 'Other lessons you may need' : 'Driving lessons in York'}</h2>
            <div className="flex flex-wrap gap-2.5">
              {services.filter((s) => s.path !== path).map((s) => (
                <a key={s.path} href={s.path} className={chip}>{s.name}</a>
              ))}
            </div>
          </div>
        )}

        {(svc || kind === 'area' || kind === 'info') && (
          <div>
            <h2 className={h}>Learner help</h2>
            <div className="flex flex-wrap gap-2.5">
              {[...learnerHelp.filter((l) => l.path !== path), ...articles.filter((a) => a.path !== path)].slice(0, 6).map((l) => (
                <a key={l.path} href={l.path} className={chip}>{l.name}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
