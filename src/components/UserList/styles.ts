import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::webkit-scrollbar {
    width: 4px;
  }

  ::webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 0 8px;
  display: flex;
  height: 42px;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  .avatar {
    position: relative;
    > .status {
      width: 15px;
      height: 15px;
      background-color: var(--away);
      position: absolute;
      border-radius: 50%;
      right: 8px;
      bottom: -4px;
      border: 3px solid var(--primary);
    }
  }

  .content {
    flex: 1 1 auto;

    .nameDecorators {
      display: flex;
      align-items: center;
      > strong {
        font-weight: 500;
        color: var(--white);
        opacity: 0.7;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      > span {
        margin-left: 9px;
        background-color: var(--discord);
        color: var(--white);
        border-radius: 4px;
        height: 15px;
        padding: 0 4px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 10px;
        line-height: 15px;
      }
    }
  }

  .subtext {
    white-space: nowrap;
    width: 100%;
    .activity {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      .activityText {
        flex: 0 1 auto;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: var(--gray);
      }
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > p {
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary);
  margin-right: 12px;
  &.bot {
    background-color: var(--mention-detail);
  }
`;
