import { roundTo } from "../../../../utils/roundTo";
import { CrosshairIcon } from "../../../common/icons/CrosshairIcon";
import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { InsightCard } from "../InsightCard";
import { Pagination } from "../Pagination";
import { Link } from "../styles";
import { Trace } from "../types";
import * as s from "./styles";
import { EndpointNPlusOneInsightProps } from "./types";

const FRACTION_MIN_LIMIT = 0.01;

export const EndpointNPlusOneInsight = (
  props: EndpointNPlusOneInsightProps
) => {
  const handleSpanLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  const handleTraceButtonClick = (trace: Trace) => {
    props.onTraceSelect(trace);
  };

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.ContentContainer>
          <s.Description>Check the following locations:</s.Description>
          <s.SpanList>
            <Pagination assetId={props.asset.id}>
              {props.insight.spans.map((span) => {
                const spanInfo = span.internalSpan || span.clientSpan;
                const asset = findAssetBySpanCodeObjectId(
                  props.assets,
                  spanInfo.spanCodeObjectId,
                  props.asset.serviceName
                );

                const spanName = spanInfo.displayName;

                const fraction =
                  span.fraction < FRACTION_MIN_LIMIT
                    ? "minimal"
                    : `${roundTo(span.fraction, 2)} of request`;

                return (
                  <s.Span key={spanName}>
                    {asset ? (
                      <Link onClick={() => handleSpanLinkClick(asset)}>
                        {spanName}
                      </Link>
                    ) : (
                      spanName
                    )}
                    <s.Stats>
                      <s.Stat>
                        <s.Description>Impact</s.Description>
                        <span>{fraction}</span>
                      </s.Stat>
                      <s.Stat>
                        <s.Description>Repeats</s.Description>
                        <span>{span.occurrences}</span>
                      </s.Stat>
                      <s.Stat>
                        <s.Description>Duration</s.Description>
                        <span>
                          {span.duration.value} {span.duration.unit}
                        </span>
                      </s.Stat>
                    </s.Stats>
                    <s.Button
                      icon={{ component: CrosshairIcon, size: 16 }}
                      onClick={() =>
                        handleTraceButtonClick({
                          name: spanName,
                          id: span.traceId,
                        })
                      }
                    >
                      Trace
                    </s.Button>
                  </s.Span>
                );
              })}
            </Pagination>
          </s.SpanList>
        </s.ContentContainer>
      }
    />
  );
};
