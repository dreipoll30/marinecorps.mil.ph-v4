import { leaders } from "./data/leaders";
import { 
  Orgchart, 
  OrgchartAvatarCircle, 
  OrgchartBlock, 
  OrgchartContainer, 
  OrgchartData, 
  OrgchartItem,
  UCRTW,
  UCOS2,
  UCOS3,
  OrgchartGroup
} from "./orgchart/orgchart";
import Popover from "./popover";
import { VerticalDataGroup } from "./vertical-group";

export default function LeadersChart() {
    // 1. Core Top Hierarchy Parsing
    const commandant = leaders.find((l) => l.department === 'Commandant');
    const deputy = leaders.find((l) => l.department === 'Deputy Commandant, PMC');
    const csm = leaders.find((l) => l.department === 'Command Sergeant Major, PMC');
    const cms = leaders.find((l) => l.department === 'Chief of Marine Staff, PMC');

    // 2. Exact Token Filtering using .endsWith to bypass the MC10/MC1 overlapping bug
    const mcRow4 = leaders.filter((l) => ['MC1', 'MC2', 'MC3', 'MC4', 'MC5'].some(id => l.department.endsWith(id)));
    const mcRow5 = leaders.filter((l) => ['MC6', 'MC7', 'MC8', 'MC9', 'MC10', 'MC11'].some(id => l.department.endsWith(id)));

    return (
        <OrgchartContainer>
            <Orgchart>
                
                {/* --- ROW 1: COMMANDANT (CENTERED) & SGT MAJOR (SIDE POSITION) --- */}
                <OrgchartBlock>
                    <OrgchartGroup>
                        {commandant && (
                            <OrgchartItem isRoot isParent>
                                <NodePopover label="Commandant" avatar={commandant.avatar} />
                            </OrgchartItem>
                        )}
                        
                        {/* Absolutely matches your custom .sgtMajorConnector backdrop link */}
                        <div className="absolute top-[65px] left-100 w-[230px] h-[55px] border-b border-solid border-[#ff4d4d] pointer-events-none z-0" />

                        {/* Placed inside an absolute block so it has zero layout effect on the Commandant */}
                        {csm && (
                            <UCRTW>
                                <OrgchartItem isRoot>
                                    <NodePopover label="SGT MAJOR" avatar={csm.avatar} />
                                </OrgchartItem>
                            </UCRTW>
                        )}
                    </OrgchartGroup>
                </OrgchartBlock>
                {/* --- ROW 2: DEPUTY COMMANDANT --- */}
                <OrgchartBlock>
                    <div className="flex justify-center items-center py-8 w-full">
                        {deputy && (
                            <OrgchartItem isParent>
                                <NodePopover label="DEPUTY COMMANDANT" avatar={deputy.avatar} />
                            </OrgchartItem>
                        )}
                    </div>
                </OrgchartBlock>

                {/* --- ROW 3: CHIEF OF STAFF --- */}
                <OrgchartBlock>
                    <div className="flex justify-center items-center pt-4 w-full">
                        {cms && (
                            // Variant maps straight to your vertical bypass background line rules
                            <OrgchartItem isParent variant="bypassStemDown">
                                <NodePopover label="CHIEF OF STAFF" avatar={cms.avatar} />
                            </OrgchartItem>
                        )}
                    </div>
                </OrgchartBlock>

                {/* --- ROW 4: MC1 TO MC5 HORIZONTAL CONNECTOR ROW --- */}
                <OrgchartBlock>
                    <UCOS2 style={{ '--node-count': mcRow4.length } as React.CSSProperties}>
                        {mcRow4.map((item, idx) => (
                            <div key={item.id || idx} className="flex flex-col items-center relative [padding:0_10px]">
                                <OrgchartItem className="w-20!">
                                    <NodePopover label={`MC${idx + 1}`} avatar={item.avatar} />
                                </OrgchartItem>
                            </div>
                        ))}
                    </UCOS2>
                </OrgchartBlock>

                {/* --- ROW 5: MC6 TO MC11 HORIZONTAL CONNECTOR ROW --- */}
                <OrgchartBlock>
                    <UCOS3 style={{ '--node-count': mcRow5.length } as React.CSSProperties}>
                        {mcRow5.map((item, idx) => (
                            <div key={item.id || idx} className="flex flex-col items-center relative [padding:0_10px]">
                                <OrgchartItem className="w-20!"> 
                                    <NodePopover label={`MC${idx + 6}`} avatar={item.avatar} />
                                </OrgchartItem>
                            </div>
                        ))}
                    </UCOS3>
                </OrgchartBlock>

            </Orgchart>
        </OrgchartContainer>
    );
}

function NodePopover({ label, avatar }) {
    return (
        <Popover
            className="popover--c popover--md popover--base"
            title={
                <VerticalDataGroup>
                    <OrgchartAvatarCircle>
                        <img
                            className="block w-full h-full object-cover"
                            src={avatar || '/static/avatar.jpg'}
                            alt={label}
                        />
                    </OrgchartAvatarCircle>
                    <OrgchartData>{label}</OrgchartData>
                </VerticalDataGroup>
            }
        >
            <div className="p-4 bg-white text-slate-800 text-sm">
                Profile Actions & Information...
            </div>
        </Popover>
    );
}