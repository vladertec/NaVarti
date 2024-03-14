import React, { useState, useEffect, useRef } from "react"

const TransferredThings = ({ transferredThingsItems }) => {
  const [showNumbers, setShowNumbers] = useState(false)
  const [counters, setCounters] = useState(
    Array(transferredThingsItems.length).fill(0)
  )
  const itemsRef = useRef(null)

  useEffect(() => {
    let currentRef = itemsRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowNumbers(true)
            observer.unobserve(currentRef)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    let timers = []
    if (showNumbers) {
      transferredThingsItems.forEach((item, index) => {
        const timer = setTimeout(() => {
          let interval = Math.floor(2000 / item.quantity)
          let count = 0
          const incrementCounter = () => {
            if (count < item.quantity) {
              setCounters((prevCounters) => {
                const newCounters = [...prevCounters]
                newCounters[index] = count
                return newCounters
              })
              count++
              setTimeout(incrementCounter, interval)
            }
          }
          incrementCounter()
        }, index * 100)
        timers.push(timer)
      })
    }
    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [showNumbers, transferredThingsItems])

  if (transferredThingsItems.length === 0) {
    return null
  }

  return (
    <div className="transferred-things" ref={itemsRef}>
      <h2 className="transferred-things__title">Вже передали</h2>
      <p className="transferred-things__description">
        Наш фонд працює недавно, але завдяки ретельній роботі та вашій допомозі
        через наші збори, ми вже передали:
      </p>
      <div className="transferred-things__items items-container">
        {transferredThingsItems.map((item, index) => (
          <div key={index} className="items-container__item">
            <span className="items-container__item-name">{item.name}</span>
            {showNumbers && (
              <span className="items-container__item-quantity">
                {counters[index]} {item.unit}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransferredThings
