import React from "react";
import { FactionName, CompanyName, CityName } from "@enums";
import { Router } from "../ui/GameRoot";
import { Page } from "../ui/Router";
import { Option } from "./ui/Option";
import { Typography } from "@mui/material";

interface FactionInfoParams {
  infoText?: JSX.Element;
  rumorText?: JSX.Element;
  enemies?: FactionName[];
  offerHackingWork?: boolean;
  offerFieldWork?: boolean;
  offerSecurityWork?: boolean;
  special?: boolean;
  keepOnInstall?: boolean;
  assignment?: () => React.ReactElement;
}

/** Contains the "information" property for all the Factions, which is just a description of each faction */
export class FactionInfo {
  /** The names of all other factions considered to be enemies to this faction. */
  enemies: FactionName[];

  /** The descriptive text to show on the faction's page. */
  infoText: JSX.Element;

  /** The hint to show about how to get invited to this faction. */
  rumorText: JSX.Element;

  /** A flag indicating if the faction supports field work to earn reputation. */
  offerFieldWork: boolean;

  /** A flag indicating if the faction supports hacking work to earn reputation. */
  offerHackingWork: boolean;

  /** A flag indicating if the faction supports security work to earn reputation. */
  offerSecurityWork: boolean;

  /** Keep faction on install. */
  keep: boolean;

  /** Special faction */
  special: boolean;

  /** The data to display on the faction screen. */
  assignment?: () => React.ReactElement;

  constructor(params: FactionInfoParams) {
    this.infoText = params.infoText ?? <></>;
    this.rumorText = params.rumorText ?? <></>;
    this.enemies = params.enemies ?? [];
    this.offerHackingWork = params.offerHackingWork ?? false;
    this.offerFieldWork = params.offerFieldWork ?? false;
    this.offerSecurityWork = params.offerSecurityWork ?? false;

    this.keep = params.keepOnInstall ?? false;
    this.special = params.special ?? false;
    this.assignment = params.assignment;
  }

  offersWork(): boolean {
    return this.offerFieldWork || this.offerHackingWork || this.offerSecurityWork;
  }
}

/** A map of all factions and associated info to them. */
export const FactionInfos: Record<FactionName, FactionInfo> = {
  // Endgame
  [FactionName.Illuminati]: new FactionInfo({
    infoText: (
      <>
        Humanity never changes. No matter how civilized society becomes, it will eventually fall back into chaos. And
        from this chaos, we are the invisible hand that guides them to order.{" "}
      </>
    ),
    rumorText: (
      <>
        The ancient secret society that controls the entire world from the shadows with their invisible hand. With their
        personal wealth and skills they have penetrated every major government, financial agency, and corporation in the
        last three hundred years.
      </>
    ),
    offerHackingWork: true,
    offerFieldWork: true,
  }),

  [FactionName.Daedalus]: new FactionInfo({
    infoText: <>Yesterday we obeyed kings and bent our necks to emperors. Today we kneel only to truth.</>,
    rumorText: <>Follow the thread.</>,
    offerHackingWork: true,
    offerFieldWork: true,
  }),

  [FactionName.TheCovenant]: new FactionInfo({
    infoText: (
      <>
        Surrender yourself. Give up your empty individuality to become part of something great, something eternal.
        Become a slave. Submit your mind, body, and soul. Only then can you set yourself free.
        <br />
        <br />
        Only then can you discover immortality.
      </>
    ),
    rumorText: <>{FactionName.TheCovenant} offers an exclusive service to those who have reached the limits of individual fitness and wish to go further.</>,
    offerHackingWork: true,
    offerFieldWork: true,
  }),

  // Megacorporations, each forms its own faction
  [FactionName.ECorp]: new FactionInfo({
    infoText: (
      <>
        {FactionName.ECorp}'s mission is simple: to connect the world of today with the technology of tomorrow. With our
        wide range of Internet-related software and commercial hardware, {FactionName.ECorp} makes the world's
        information universally accessible.
      </>
    ),
    rumorText: <>High-ranking employees of {CompanyName.ECorp} can gain access to proprietary hacking augmentations.</>,
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  [FactionName.MegaCorp]: new FactionInfo({
    infoText: (
      <>
        {FactionName.MegaCorp} does what no other dares to do. We imagine. We create. We invent. We create what others
        have never even dreamed of. Our work fills the world's needs for food, water, power, and transportation on an
        unprecedented scale, in ways that no other company can.
        <br />
        <br />
        In our labs and factories and on the ground with customers, {FactionName.MegaCorp} is ushering in a new era for
        the world.
      </>
    ),
    rumorText: <>High-ranking employees of {CompanyName.MegaCorp} can gain access to proprietary biotech augmentations.</>,
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  [FactionName.BachmanAssociates]: new FactionInfo({
    infoText: (
      <>
        Where Law and Business meet - that's where we are.
        <br />
        <br />
        Legal Insight - Business Instinct - Innovative Experience.
      </>
    ),
    rumorText: (
      <>
        High-ranking employees of {CompanyName.BachmanAndAssociates} can gain access to proprietary negotiation
        augmentations.
      </>
    ),
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  [FactionName.BladeIndustries]: new FactionInfo({
    infoText: <>Augmentation is Salvation.</>,
    rumorText: (
      <>
        High-ranking employees of {CompanyName.BladeIndustries} can gain access to proprietary bionic
        augmentations.
      </>
    ),
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  [FactionName.NWO]: new FactionInfo({
    infoText: (
      <>
        Humans don't truly desire freedom. They want to be observed, understood, and judged. They want to be given
        purpose and direction in life. That is why they created God. And that is why they created civilization - not
        because of willingness, but because of a need to be incorporated into higher orders of structure and meaning.
      </>
    ),
    rumorText: (
      <>
        High-ranking employees of {CompanyName.NWO} can gain access to proprietary nanotech
        augmentations.
      </>
    ),
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  [FactionName.ClarkeIncorporated]: new FactionInfo({
    infoText: <>The Power of the Genome - Unlocked.</>,
    rumorText: (
      <>
        High-ranking employees of {CompanyName.ClarkeIncorporated} can gain access to proprietary neurotech
        augmentations.
      </>
    ),
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  [FactionName.OmniTekIncorporated]: new FactionInfo({
    infoText: <>Simply put, our mission is to design and build robots that make a difference.</>,
    rumorText: <>High-ranking employees of {CompanyName.OmniTekIncorporated} can gain access to proprietary data-processing augmentations.</>,
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  [FactionName.FourSigma]: new FactionInfo({
    infoText: (
      <>
        The scientific method is the best way to approach investing. Big strategies backed up with big data. Driven by
        deep learning and innovative ideas. And improved by iteration. That's {FactionName.FourSigma}.
      </>
    ),
    rumorText: <>High-ranking employees of {CompanyName.FourSigma} can gain access to a range of versatile augmentations.</>,
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  [FactionName.KuaiGongInternational]: new FactionInfo({
    infoText: <>Dream big. Work hard. Make history.</>,
    rumorText: <>High-ranking employees of {CompanyName.KuaiGongInternational} can gain access to proprietary dermatech augmentations.</>,
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  // Other Corporations
  [FactionName.FulcrumSecretTechnologies]: new FactionInfo({
    infoText: (
      <>
        The human organism has an innate desire to worship. That is why they created gods. If there were no gods, it
        would be necessary to create them. And now we can.
      </>
    ),
    rumorText: <>High-ranking employees of {CompanyName.FulcrumTechnologies} may discover a company system with access to proprietary neural network augmentations.</>,
    offerHackingWork: true,
    offerSecurityWork: true,
    keepOnInstall: true,
  }),

  // Hacker groups
  [FactionName.BitRunners]: new FactionInfo({
    infoText: (
      <>
        Our entire lives are controlled by bits. All of our actions, our thoughts, our personal information. It's all
        transformed into bits, stored in bits, communicated through bits. It’s impossible for any person to move, to
        live, to operate at any level without the use of bits. And when a person moves, lives, and operates, they leave
        behind their bits, mere traces of seemingly meaningless fragments of information. But these bits can be
        reconstructed. Transformed. Used.
        <br />
        <br />
        Those who run the bits, run the world.
      </>
    ),
    rumorText: <>Run for the hills.</>,
    offerHackingWork: true,
  }),

  [FactionName.TheBlackHand]: new FactionInfo({
    infoText: (
      <>
        The world, so afraid of strong government, now has no government. Only power - Digital power. Financial power.
        Technological power. And those at the top rule with an invisible hand. They built a society where the rich get
        richer, and everyone else suffers.
        <br />
        <br />
        So much pain. So many lives. Their darkness must end.
      </>
    ),
    rumorText: <>I.I.I.I</>,
    offerHackingWork: true,
    offerFieldWork: true,
  }),

  // prettier-ignore
  [FactionName.NiteSec]: new FactionInfo({
    infoText:(<>
    {"                  __..__               "}<br />
    {"                _.nITESECNIt.            "}<br />
    {"             .-'NITESECNITESEc.          "}<br />
    {"           .'    NITESECNITESECn         "}<br />
    {"          /       NITESECNITESEC;        "}<br />
    {"         :        :NITESECNITESEC;       "}<br />
    {"         ;       $ NITESECNITESECN       "}<br />
    {"        :    _,   ,N'ITESECNITESEC       "}<br />
    {"        : .+^^`,  :    `NITESECNIT       "}<br />
    {"         ) /),     `-,-=,NITESECNI       "}<br />
    {"        /  ^         ,-;|NITESECN;       "}<br />
    {"       /     _.'     '-';NITESECN        "}<br />
    {"      (  ,           ,-''`^NITE'         "}<br />
    {"       )`            :`.    .'           "}<br />
    {"       )--           ;  `- /             "}<br />
    {"       '        _.-'     :              "}<br />
    {"       (     _.-'   .                  "}<br />
    {"        ------.                       "}<br />
    {"                .                     "}<br />
    {"                         _.nIt          "}<br />
    {"                    _.nITESECNi         "}<br />
    {"                   nITESECNIT^'         "}<br />
    {"                   NITE^' ___           "}<br />
    {"                  /    .gP''''Tp.       "}<br />
    {"                 :    d'     .  `b      "}<br />
    {"                 ;   d'       o  `b ;    "}<br />
    {"                /   d;            `b|    "}<br />
    {"               /,   $;          @  `:    "}<br />
    {"              /'    $/               ;   "}<br />
    {"            .'      $/b          o   |   "}<br />
    {"          .'       d$/$;             :   "}<br />
    {"         /       .d/$/$;          ,   ;  "}<br />
    {"        d      .dNITESEC          $   |  "}<br />
    {"       :bp.__.gNITESEC/$         :$   ;  "}<br />
    {"       NITESECNITESECNIT         /$b :   "}<br /></>),
    rumorText: <>A hacking group known as {FactionName.NiteSec} will invite you to join them if you demonstrate your hacking skills on their server.</>,
    offerHackingWork: true,
    offerFieldWork: false,
    offerSecurityWork: false,
    special: false,
    keepOnInstall: false,
  }),

  // City factions, essentially governments
  [FactionName.Aevum]: new FactionInfo({
    infoText: <>The Silicon City.</>,
    rumorText: <>Wealthy residents of {CityName.Aevum} may be invited to work for the Silicon City.</>,
    enemies: [FactionName.Chongqing, FactionName.NewTokyo, FactionName.Ishima, FactionName.Volhaven],
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),
  [FactionName.Chongqing]: new FactionInfo({
    infoText: <>Serve the People.</>,
    rumorText: <>Wealthy residents of {CityName.Chongqing} may be invited to serve the people.</>,
    enemies: [FactionName.Sector12, FactionName.Aevum, FactionName.Volhaven],
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),
  [FactionName.Ishima]: new FactionInfo({
    infoText: <>The East Asian Order of the Future.</>,
    rumorText: <>Wealthy residents of {CityName.Ishima} may be invited to work for the East Asian Order of the Future.</>,
    enemies: [FactionName.Sector12, FactionName.Aevum, FactionName.Volhaven],
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),
  [FactionName.NewTokyo]: new FactionInfo({
    infoText: <>Asia's World City.</>,
    rumorText: <>Wealthy residents of {CityName.NewTokyo} may be invited to work for Asia's World City.</>,
    enemies: [FactionName.Sector12, FactionName.Aevum, FactionName.Volhaven],
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),
  [FactionName.Sector12]: new FactionInfo({
    infoText: <>The City of the Future.</>,
    rumorText: <>Wealthy residents of {CityName.Sector12} may be invited to work for the City of the Future.</>,
    enemies: [FactionName.Chongqing, FactionName.NewTokyo, FactionName.Ishima, FactionName.Volhaven],
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),
  [FactionName.Volhaven]: new FactionInfo({
    infoText: <>Benefit, Honor, and Glory.</>,
    rumorText: <>Wealthy residents of {CityName.Volhaven} may be invited to work for the city's Benefit, Honor, and Glory.</>,
    enemies: [FactionName.Chongqing, FactionName.Sector12, FactionName.NewTokyo, FactionName.Aevum, FactionName.Ishima],
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),

  // Criminal Organizations/Gangs
  [FactionName.SpeakersForTheDead]: new FactionInfo({
    infoText: <>It is better to reign in Hell than to serve in Heaven.</>,
    rumorText: <>We know.</>,
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),

  [FactionName.TheDarkArmy]: new FactionInfo({
    infoText: <>The World doesn't care about right or wrong. It only cares about power.</>,
    rumorText: <>A ruthless criminal organization based in {CityName.Chongqing}</>,
    offerHackingWork: true,
    offerFieldWork: true,
  }),

  [FactionName.TheSyndicate]: new FactionInfo({
    infoText: <>Honor holds you back.</>,
    rumorText: <>A criminal organization that operates in the western hemisphere.</>,
    offerHackingWork: true,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),

  [FactionName.Silhouette]: new FactionInfo({
    infoText: (
      <>
        Corporations have filled the void of power left behind by the collapse of Western government. The issue is
        they've become so big that you don't know who they're working for. And if you're employed at one of these
        corporations, you don't even know who you're working for.
        <br />
        <br />
        That's terror. Terror, fear, and corruption. All born into the system, all propagated by the system.
      </>
    ),
    rumorText: <>Corporate executives with the right moral flexiblity may be invited to find out who they are truly working for.</>,
    offerHackingWork: true,
    offerFieldWork: true,
  }),

  [FactionName.Tetrads]: new FactionInfo({
    infoText: <>Following the mandate of Heaven and carrying out the way.</>,
    rumorText: <>A notorious East Asian criminal organization.</>,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),

  [FactionName.SlumSnakes]: new FactionInfo({
    infoText: <>{FactionName.SlumSnakes} rule!</>,
    rumorText: <>{FactionName.SlumSnakes} rule!</>,
    offerFieldWork: true,
    offerSecurityWork: true,
  }),

  // Early game factions - factions the player will prestige with early on that don't belong in other categories.
  [FactionName.Netburners]: new FactionInfo({
    infoText: <>{"~~//*>H4CK||3T 8URN3R5**>?>\\~~"}</>,
    rumorText: <>{"~~//*>H4CK||3T 8URN3R5**>?>\\~~"}</>,
    offerHackingWork: true,
  }),

  [FactionName.TianDiHui]: new FactionInfo({
    infoText: <>Obey Heaven and work righteously.</>,
    rumorText: <>Obey Heaven and work righteously.</>,
    offerHackingWork: true,
    offerSecurityWork: true,
  }),

  [FactionName.CyberSec]: new FactionInfo({
    infoText: (
      <>
        The Internet is the first thing that was built that we don't fully understand, the largest experiment in anarchy
        that we have ever had. And as the world becomes increasingly dominated by it, society approaches the brink of
        total chaos. We serve only to protect society, to protect humanity, to protect the world from imminent collapse.
      </>
    ),
    rumorText: <>A hacking group known as {FactionName.CyberSec} will invite you to join them if you demonstrate your hacking skills on their server.</>,
    offerHackingWork: true,
  }),

  // Special Factions
  [FactionName.Bladeburners]: new FactionInfo({
    infoText: (
      <>
        It's too bad they won't live. But then again, who does?
        <br />
        <br />
        Note that for this faction, reputation can only be gained through {FactionName.Bladeburners} actions. Completing{" "}
        {FactionName.Bladeburners} contracts/operations will increase your reputation.
      </>
    ),
    rumorText: <>{CompanyName.NSA} would like to have a word with you once you're ready.</>,

    special: true,
    assignment: (): React.ReactElement => {
      return (
        <Option
          buttonText={"Open Bladeburner headquarters"}
          infoText={"You can gain reputation with bladeburner by completing contracts and operations."}
          onClick={() => Router.toPage(Page.Bladeburner)}
        />
      );
    },
  }),

  [FactionName.ChurchOfTheMachineGod]: new FactionInfo({
    // prettier-ignore
    infoText:(<>
    {"                 ``          "}<br />
    {"             -odmmNmds:      "}<br />
    {"           `hNmo:..-omNh.    "}<br />
    {"           yMd`      `hNh    "}<br />
    {"           mMd        oNm    "}<br />
    {"           oMNo      .mM/    "}<br />
    {"           `dMN+    -mM+     "}<br />
    {"            -mMNo  -mN+      "}<br />
    {"  .+-        :mMNo/mN/       "}<br />
    {":yNMd.        :NMNNN/        "}<br />
    {"-mMMMh.        /NMMh`        "}<br />
    {" .dMMMd.       /NMMMy`       "}<br />
    {"  `yMMMd.     /NNyNMMh`      "}<br />
    {"   `sMMMd.   +Nm: +NMMh.     "}<br />
    {"     oMMMm- oNm:   /NMMd.    "}<br />
    {"      +NMMmsMm-     :mMMd.   "}<br />
    {"       /NMMMm-       -mMMd.  "}<br />
    {"        /MMMm-        -mMMd. "}<br />
    {"       `sMNMMm-        .mMmo "}<br />
    {"      `sMd:hMMm.        ./.  "}<br />
    {"     `yMy` `yNMd`            "}<br />
    {"    `hMs`    oMMy            "}<br />
    {"   `hMh       sMN-           "}<br />
    {"   /MM-       .NMo           "}<br />
    {"   +MM:       :MM+           "}<br />
    {"    sNNo-.`.-omNy`           "}<br />
    {"     -smNNNNmdo-             "}<br />
    {"        `..`                 "}<br /><br />
    Many cultures predict an end to humanity in the near future, a final
    Armageddon that will end the world; but we disagree.</>),
    rumorText: <>Trouble is brewing in {CityName.Chongqing}.</>,
    offerHackingWork: false,
    offerFieldWork: false,
    offerSecurityWork: false,
    special: true,
    keepOnInstall: true,
    assignment: (): React.ReactElement => {
      return (
        <Option
          buttonText={"Open Staneks Gift"}
          infoText={
            "Stanek's Gift is a powerful augmentation that powers up the stat you chose to boost." +
            "Gaining reputation with the Church of the Machine God can only be done by charging the gift."
          }
          onClick={() => Router.toPage(Page.StaneksGift)}
        />
      );
    },
  }),
  [FactionName.ShadowsOfAnarchy]: new FactionInfo({
    infoText: (
      <>
        The government is ruled by the corporations that we have allowed to consume it. To release the world from its
        shackles, the gods grant us their strength.
      </>
    ),
    rumorText: <>Your infiltration activity has attracted attention.</>,
    special: true,
    keepOnInstall: true,
    assignment: (): React.ReactElement => {
      return <Typography>{FactionName.ShadowsOfAnarchy} can only gain reputation by infiltrating.</Typography>;
    },
  }),
};
